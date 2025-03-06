import React, { useState } from "react";
import RecycleImg from '../../assets/IMAGES/logo.jpg'
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* Toggle Button on the Left */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Logo and Text on the Right */}
        <div className="navbar-logo">
          <img src={RecycleImg} alt="Recyclick Logo" />
          <h1>Recyclick</h1>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#serviceSectionContent" style={{textDecoration:"none"}}><li>Service</li></a>
          <a href="#footerSectionContent" style={{textDecoration:"none"}}><li>Company</li></a>
          <a href="#footerSectionContent" style={{textDecoration:"none"}}><li>Careers</li></a>
          <a href="#featuredSectionContent" style={{textDecoration:"none"}}><li>About Us</li></a>
          <a href="#" style={{textDecoration:"none"}}><li>Check Rate List</li></a>
          <a href="#" style={{textDecoration:"none"}}><li>Sell Crap</li></a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
