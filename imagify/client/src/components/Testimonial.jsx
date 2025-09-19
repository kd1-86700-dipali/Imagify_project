import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import './Testimonials.css';

const Testimonial = () => {
  return (
    <div className="testimonials-section">
    <h1 className="testimonials-title">Customer testimonials</h1>
    <p className="testimonials-subtitle">What Our Users Are Saying</p>
    <div className="testimonials-container">
      {testimonialsData.map((Testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-content">
            <img src={Testimonial.image} alt="" className="testimonial-image" />
            <h2 className="testimonial-name">{Testimonial.name}</h2>
            <p className="testimonial-role">{Testimonial.role}</p>
            <div className="testimonial-stars">
              {Array(Testimonial.stars).fill().map((_, i) => (
                <img key={i} src={assets.rating_star} alt="" />
              ))}
            </div>
            <p className="testimonial-text">{Testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Testimonial
