import React from "react";
import { useState } from "react";
import herosectionImg from '../../assets/IMAGES/heropicture.png'
import "./HeroSection.css";

const HeroSection = () => {
  
  return (
    <div className="bg-green-100 min-h-screen font-sans">
     



      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">
            Got scrap? <br /> Sell it to us.
          </h2>
          <p className="hero-text">
            Turn your recyclables into cash with our easy-to-use platform. Download our app and start earning today.
          </p>
          <div className="hero-buttons">
          <button className="shadow-lg">Download iOS App</button>
          <button className="shadow-lg">For Business</button>
          </div>
        </div>

        {/* Illustration */}
        <div className="hero-image">
          <img
            src={herosectionImg}
            alt="Recycling Illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
