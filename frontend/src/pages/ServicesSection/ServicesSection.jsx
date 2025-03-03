import React from "react";
import "./ServicesSection.css";

const services = [
  { title: "Scrap Collection", description: "Digitised solution for the door-to-door free pickup of 40+ recyclables", icon: "📱" },
  { title: "EPR Service", description: "The Kabadiwala as a registered PRO, official collection & recycling partner helps in the compliance process of EPR.", icon: "📄" },
  { title: "Zero waste services", description: "Serving the Institutes/Offices/Events in achieving their zero waste goals.", icon: "♻️" },
  { title: "Zero Waste Society", description: "Serving the Residential Societies in achieving their zero waste goals.", icon: "🏡" },
  { title: "Shredding service", description: "Aiding Businesses in the safe & secure disposal of their confidential documents.", icon: "🗂️" },
  { title: "Dismantling service", description: "Providing holistic approach to implement circular solutions to the scrap disposal.", icon: "🔧" },
  { title: "Vehicle Scrapping Service", description: "Assisting people in getting rid of their old vehicles sustainably", icon: "🚗" },
  { title: "Circular Economy Services", description: "Planning, designing, and successfully executing brand's CSR campaigns as per their objectives.", icon: "♻️" },
  { title: "CRS Activity", description: "Planning, designing, and successfully executing brand's CSR campaigns as per their objectives.", icon: "📊" },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">Attaining <span className="highlight">sustainable solutions</span> with ease.</p>
      <div className="service-filters">
        <button className="filter-btn active">All services</button>
        <button className="filter-btn">For Individuals</button>
        <button className="filter-btn">For Organisations</button>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="contact-btn">Contact Us</button>
    </div>
  );
};

export default ServicesSection;
