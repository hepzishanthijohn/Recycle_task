import React from "react";
import personImg from "../../assets/IMAGES/featuredSec/featuredPerson.png";
import yourStory from "../../assets/IMAGES/featuredSec/yourStory.png";
import Financial from "../../assets/IMAGES/featuredSec/financia.png";
import Business from "../../assets/IMAGES/featuredSec/Business.png";
import startup from "../../assets/IMAGES/featuredSec/startup.png";
import globe from "../../assets/IMAGES/featuredSec/globe.png";
import love from "../../assets/IMAGES/featuredSec/love.png";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <div className="featured-container">
      {/* Appreciated & Featured By Section */}
      <h2 className="featured-title">Appreciated & Featured By</h2>

      {/* Logo Grid */}
      <div className="featured-logo-section">
        <img src={yourStory} alt="YourStory" />
        <img src={Financial} alt="Financial Express" />
        <img src={Business} alt="Business Standard" />
        <img src={startup} alt="#startupindia" />
        <img src={globe} alt="Patrika" />
        <img src={love} alt="The Better India" />
      </div>

      {/* Individuals Section */}
      <div className="individuals-section">
        {/* Image */}
        <div className="image-container">
          <img src={personImg} alt="Smiling Person" className="featured-person-image" />
        </div>

        {/* Text Content */}
        <div className="text-container">
          <p className="text-subtitle">Empowering</p>
          <h2 className="text-title">Individuals</h2>
          <p className="text-description">
            by providing safe disposal ways to ensure healthy environment & sustainable living.
          </p>
          <a href="#" className="learn-more-link">Learn more →</a>
        </div>
      </div>
      {/* 2nd Individuals Section */}
      <div className="second-individuals-section">
        
        {/* Text Content */}
        <div className="second-text-container">
          <p className="text-subtitle">Enabling</p>
          <h2 className="text-title">Business</h2>
          <p className="text-description">
            to offset their carbon footprint for eco-friendly organizational practices.
          </p>
          <a href="#" className="learn-more-link">Learn more →</a>
        </div>
        {/* Image */}
        <div className="image-container">
          <img src={personImg} alt="Smiling Person" className="featured-person-image" />
        </div>

      </div>
    </div>
  );
};

export default FeaturedSection;
