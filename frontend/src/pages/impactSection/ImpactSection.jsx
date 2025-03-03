import React from "react";
import { FaTint, FaBolt, FaOilCan, FaTree } from "react-icons/fa";
import "./ImpactSection.css";

const ImpactSection = () => {
  return (
    <div className="impact-section">
      <div className="hero-section">
        <h1>Farak Padta Hai</h1>
        <div className="impact-box">
          <h2>81,10,504</h2>
          <p>kilograms waste diverted from landfills.</p>
        </div>
      </div>

      <div className="impact-stats">
        <div className="impact-card blue">
          <FaTint className="icon" />
          <h3>13.8 crores</h3>
          <p>LITRES OF WATER</p>
        </div>

        <div className="impact-card red">
          <FaBolt className="icon" />
          <h3>5,65,536</h3>
          <p>KWH OF ELECTRICITY</p>
        </div>

        <div className="impact-card yellow">
          <FaOilCan className="icon" />
          <h3>2.5 lakhs</h3>
          <p>LITRES OF OIL</p>
        </div>

        <div className="impact-card green">
          <FaTree className="icon" />
          <h3>10,243</h3>
          <p>NUMBER OF TREES</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
