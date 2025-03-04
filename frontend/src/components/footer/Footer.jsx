import React from "react";
import './Footer.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footerSectionContent">
      <footer className="footer">
      <div className="footer-container">
        {/* First Column */}
        <div className="footer-column">
          <h4>Businesses</h4>
          <ul>
            <li>EPR</li>
            <li>Circular Economy</li>
            <li>Paper Shredding</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="footer-column">
          <h4>Individuals</h4>
          <ul>
            <li>Scrap Collection</li>
            <li>Vehicle Scrapping</li>
            <li>Zero Waste Society</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Franchise</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="logo">
            <span>♻️</span>
            <h2>Recyclick</h2>
          </div>
          <p>+91-76972 60260</p>
          <p><a href="https://goo.gl/maps/" target="_blank" rel="noopener noreferrer">The Recyclick, 2, Main Rd, Vidhya Nagar</a></p>
          <p>Chennai, TamilNadu</p>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
