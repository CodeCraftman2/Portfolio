require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); // Use Axios for HTTP requests
const cors = require('cors');
const app = express();
const cron = require('node-cron');

app.use(express.json());
app.use(cors());

// MongoDB Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  content: String,
  email: String,
  image: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Friendly root route for Render and other hosts
app.get('/', (req, res) => {
  res.send('Welcome! The backend server is running. Use the API endpoints for testimonials and more.');
});

// Submit testimonial
app.post('/api/testimonials', async (req, res) => {
  try {
    // Prevent duplicate reviews by email
    const existing = await Testimonial.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ error: 'You have already submitted a review.' });
    }

    const testimonial = await Testimonial.create(req.body);
    
    // Prepare email data
    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY, // Use PUBLIC_KEY for EmailJS
      template_params: {
        to_email: process.env.ADMIN_EMAIL,
        from_name: testimonial.name,
        message: testimonial.content,
        approve_link: `${process.env.BASE_URL}/api/testimonials/${testimonial._id}/approve`
      }
    };

    console.log("Sending email with data:", JSON.stringify(emailData, null, 2));
    
    // Send email
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      emailData,
      {
        headers: {
          'Content-Type': 'application/json',
          'origin': 'http://localhost' // Required by EmailJS
        }
      }
    );

    console.log('Email sent successfully:', response.data);
    res.status(201).json(testimonial);
  } catch (error) {
    console.error('Full email error:', error);
    if (error.response) {
      console.error('EmailJS response error:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to submit testimonial' });
  }
});

// Approve testimonial (PATCH)
app.patch('/api/testimonials/:id/approve', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    
    res.json({ 
      message: `Testimonial by ${testimonial.name} approved!`,
      testimonial
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Approve testimonial (GET for browser)
app.get('/api/testimonials/:id/approve', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    if (!testimonial) {
      return res.status(404).send('<h2>Testimonial not found.</h2>');
    }
    res.send(`<h2>Testimonial by ${testimonial.name} has been approved!</h2>`);
  } catch (error) {
    res.status(400).send(`<h2>Error: ${error.message}</h2>`);
  }
});

// Delete testimonial by name and content
app.delete('/api/testimonials', async (req, res) => {
  try {
    const { name, content } = req.body;
    if (!name || !content) {
      return res.status(400).json({ error: 'Name and content are required.' });
    }
    const result = await Testimonial.findOneAndDelete({ name, content });
    if (!result) {
      return res.status(404).json({ error: 'Testimonial not found.' });
    }
    res.json({ message: 'Testimonial deleted successfully.', testimonial: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get approved testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: 'approved' });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Schedule a job to delete pending testimonials older than 1 day
cron.schedule('0 * * * *', async () => {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  try {
    const result = await Testimonial.deleteMany({
      status: 'pending',
      createdAt: { $lt: oneDayAgo }
    });
    if (result.deletedCount > 0) {
      console.log(`Deleted ${result.deletedCount} old pending testimonials.`);
    }
  } catch (err) {
    console.error('Error deleting old pending testimonials:', err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 