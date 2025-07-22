import React, { useState } from 'react';
import './testimonials.css';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (submitted) return <p className="testimonial__submitted">Thank you! Your words will inspire me to do even better.</p>;

  return (
    <div className="testimonial__form">
      <h3 className="testimonial__form-title">Share Your Experience</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea
          placeholder="Your Testimonial"
          required
          value={formData.content}
          onChange={(e) => setFormData({...formData, content: e.target.value})}
          rows={4}
        />
        <button type="submit" className="button">Submit Testimonial</button>
      </form>
    </div>
  );
};

export default TestimonialForm; 