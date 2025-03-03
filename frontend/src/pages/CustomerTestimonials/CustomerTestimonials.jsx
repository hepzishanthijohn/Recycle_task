import React from "react";

const testimonials = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    alt: "Woman working on laptop",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    alt: "Man talking to camera",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
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
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.alt} />
          <div className="play-button">▶</div>
        </div>
      ))}
    </div>
  </section>
    </div>
  );
};

export default CustomerTestimonials;
