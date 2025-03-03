import React from "react";
import Recyclick from '../../assets/IMAGES/Recyclick/Recyclick.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
import "./RecyclickLanding.css"; // Import external CSS

const RecyclickLanding = () => {
  return (
    <div className="recyclick-container">
      {/* Mobile UI Section with Image */}
      <div className="mobile-ui">
        <img
          src={Recyclick} // Replace with the actual image path
          alt="Recyclick Mobile UI"
          className="mobile-image"
        />
      </div>

      {/* Promo Section */}
      <div className="promo-section">
        <h1 className="title">Recyclick</h1>
        <h2 className="subtitle">India’s No. 1 Scrap Pickup App</h2>
        <p className="description">
          Providing door-to-door free pickup service of 40+ recyclables.
        </p>
        <div className="button-container">
          <button className="invite-button">Send me an invite</button>
        </div>
        <div className="icons">
          <FaGooglePlay className="icon" />
          <FaApple className="icon" />
        </div>
      </div>
    </div>
  );
};

export default RecyclickLanding;
