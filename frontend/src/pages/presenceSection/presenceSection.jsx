import React from "react";
import presence from '../../assets/IMAGES/presence/presence.png'
import "./presenceSection.css";

const PresenceSection = () => {
  const activeCities = ["Bhopal", "Indore", "Raipur", "Nagpur", "Lucknow"];
  const upcomingCities = [
    { name: "Ahmedabad", status: "coming soon" },
    { name: "Mumbai", status: "coming soon" },
    { name: "Pune", status: "coming soon" },
    { name: "Bangalore", status: "coming soon" },
    { name: "Hyderabad", status: "coming soon" },
  ];

  return (
    <div className="presence-section">
      <div className="text-section">
        <h1>Our Presence Across Nation</h1>
        <p>
          The Recyclick has established its services in 5 major cities of India and
          is now expanding its reach in other parts of the country.
        </p>
        <div className="cities-list">
          {activeCities.map((city) => (
            <span key={city} className="active-city">{city}</span>
          ))}
          {upcomingCities.map((city) => (
            <span key={city.name} className="upcoming-city">
              {city.name} <small>{city.status}</small>
            </span>
          ))}
        </div>
      </div>
      <div className="map-section">
        <img src={presence} alt="India Map" className="india-map" />
        <div className="location-markers">
          {/* Add location markers here */}
          <div className="marker active" style={{ top: "40%", left: "55%" }}></div>
          <div className="marker upcoming" style={{ top: "60%", left: "45%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PresenceSection;
