import React from "react";
import herosectionImg from '../../assets/IMAGES/heroimage.png';
import downArrowImg from '../../assets/IMAGES/downarrow.png'; // Add the arrow image
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-green-100 min-h-screen font-sans relative flex flex-col">
      {/* Hero Section */}
      <section className="hero flex-1">
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
          <img src={herosectionImg} alt="Recycling Illustration" />
        </div>
      </section>

      {/* Down Arrow */}
      <div className="down-arrow-container">
        <a href="#">
          <img
            src={downArrowImg}
            alt="Down Arrow"
            className="down-arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
