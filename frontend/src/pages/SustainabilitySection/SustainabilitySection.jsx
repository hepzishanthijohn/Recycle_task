import React from "react";
import "./SustainabilitySection.css";
import sustainabilityImage from "../../assets/IMAGES/sustainable/sustainable.png"; // Update the correct image path

const SustainabilitySection = () => {
  return (
    <section className="sustainability-container">
      <div className="sustainability-content">
        {/* Left Side: Image */}
        <div className="sustainability-image">
          <img src={sustainabilityImage} alt="Sustainability Cycle" />
        </div>

        {/* Right Side: Text */}
        <div className="sustainability-text">
          <p className="eco-system-text">Our Eco-System Towards</p>
          <h2 className="sustainability-title">Sustainability & Circular Economy</h2>
          <p className="sustainability-description">
            The Recyclick with its acute understanding of waste has developed
            sustainable strategies & techniques to manage waste efficiently &
            cost-efficaciously contributing in closing the loop of product life
            cycle & attain circular economy while infusing sustainability into
            lives.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
