import React, { useState, useEffect } from 'react';
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import Contact from '../contact/Contact';
import Image1 from "../../assets/woman1.png";
import Image2 from "../../assets/man.png";
import Image3 from "../../assets/woman2.png";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  // Add avatar color schemes to resemble previous fallback images
  const avatarColors = [
    { background: "E0BBE4", color: "fff" }, // woman1 (soft purple)
    { background: "4A90E2", color: "fff" }, // man (blue)
    { background: "88D8B0", color: "fff" }, // woman2 (mint/teal)
  ];

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">Feedback</h2>
      <span className="section__subtitle">Recent Review</span>
      <Swiper className="testimonial__container"
              loop={true}
              grabCursor={true}
              spaceBetween={24}
              pagination={{
                clickable:true
              }}
              breakpoints={{
                576: { slidesPerView: 2, spaceBetween: 48 },
                768: { slidesPerView: 2, spaceBetween: 48 },
              }}
              modules={[Pagination]}
      >
        {testimonials.length > 0 ? testimonials.map((testimonial, idx) => (
          <SwiperSlide className="testimonial__card" key={testimonial._id || idx}>
            <img 
              src={
                testimonial.image
                  ? testimonial.image
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=${avatarColors[idx % avatarColors.length].background}&color=${avatarColors[idx % avatarColors.length].color}&rounded=true&size=80`
              }
              alt="client" 
              className="testimonial__img" 
            />
            <h3 className="testimonial__name">{testimonial.name}</h3>
            <p className="testimonial__description">{testimonial.content}</p>
          </SwiperSlide>
        )) : (
          <SwiperSlide className="testimonial__card">
            <img src={`https://ui-avatars.com/api/?name=Client&background=${avatarColors[0].background}&color=${avatarColors[0].color}&rounded=true&size=80`} alt="client" className="testimonial__img" />
            <h3 className="testimonial__name">No testimonials yet</h3>
            <p className="testimonial__description">Be the first to leave a review!</p>
          </SwiperSlide>
        )}
      </Swiper>
      {/* Removed the Contact form from testimonials section to avoid duplication */}
      {/* <div className="testimonial__form-section">
        <Contact />
      </div> */}
    </section>
  );
}

export default Testimonials;