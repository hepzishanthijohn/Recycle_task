import React, { useState } from "react";
import RecycleImg from '../../assets/IMAGES/swmsimg.avif'
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
          <li>Service</li>
          <li>Company</li>
          <li>Carrier</li>
          <li>About Us</li>
          <li>Check Rate List</li>
          <li>Sell Crap</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
