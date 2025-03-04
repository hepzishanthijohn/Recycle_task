import React from "react";
import './CustomerTestimonials.css'
import cam3 from '../../assets/IMAGES/customers/cam3.jpg'
import cam1 from '../../assets/IMAGES/customers/cam1.jpg'
import cam2 from '../../assets/IMAGES/customers/cam2.jpeg'
import meeting1 from '../../assets/IMAGES/customers/meeting1.webp'
import meeting2 from '../../assets/IMAGES/customers/meeting2.jpg'
import meeting3 from '../../assets/IMAGES/customers/meeting3.jpg'

const testimonials = [
  {
    id: 1,
    image: cam3,
    alt: "Woman working on laptop",
  },
  {
    id: 2,
    image: cam1,
    alt: "Man talking to camera",
  },
  {
    id: 3,
    image: cam2,
    alt: "Man recording with camera",
  },
];

const Meetings = [
  {
    id: 1,
    image: meeting3,
    alt: "Woman working on laptop",
  },
  {
    id: 2,
    image: meeting1,
    alt: "Man talking to camera",
  },
  {
    id: 3,
    image: meeting2,
    alt: "Man recording with camera",
  },
];

const CustomerTestimonials = () => {
  return (
    <div>
        <section className="testimonials-section">
      <h2>Why 1,00,000+ customers love us</h2>
      <p>Hear out what our clients have to say about us.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.alt} />
            <div className="play-button">▶</div>
          </div>
        ))}
      </div>
    </section>
    <section className="testimonials-section">
    <h2>Our Success Stories</h2>
    <p>Hear out what our clients have to say about us.</p>
    <div className="testimonials-container">
      {Meetings.map((meeting) => (
        <div key={meeting.id} className="testimonial-card">
          <img src={meeting.image} alt={meeting.alt} />
          <div className="play-button">▶</div>
        </div>
      ))}
    </div>
  </section>
    </div>
  );
};

export default CustomerTestimonials;
