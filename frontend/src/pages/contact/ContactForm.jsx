import React from "react";
import './ContactForm.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing required icons

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h2>Get in touch with us</h2>
      <p>Any question or remarks? Just write us a message!</p>
      
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Fill up the form and our Team will get back to you within 24 hours</p>
          
          <div className="contact-detail">
            <FaPhoneAlt className="icon" />
            <a href="tel:+917697260260">+91-7697260260</a>
          </div>

          <div className="contact-detail">
            <FaEnvelope className="icon" />
            <a href="mailto:contact@recyclick.com">contact@Recyclick.com</a>
          </div>

          <div className="contact-detail">
            <FaMapMarkerAlt className="icon" />
            <p>
              The Recyclick, 2, Main Rd, near D-Mart, <br />
              Vidya Nagar, Chennai, Tamilnadu 600000
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <div className="contact-row">
            <input type="text" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
