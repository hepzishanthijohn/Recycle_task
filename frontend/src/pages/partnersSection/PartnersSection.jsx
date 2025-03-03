import React from "react";
import './PartnersSection.css'
const partners = [
  { name: "Paytm", logo: "paytm-logo.png" },
  { name: "Domino's", logo: "dominos-logo.png" },
  { name: "Tetra Pak", logo: "tetrapak-logo.png" },
  { name: "Larsen & Toubro", logo: "larsen-logo.png" },
  { name: "ICICI Bank", logo: "icici-logo.png" },
  { name: "Decathlon", logo: "decathlon-logo.png" },
  { name: "Hershey's", logo: "hersheys-logo.png" },
  { name: "Godrej", logo: "godrej-logo.png" },
  { name: "Reliance", logo: "reliance-logo.png" },
];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
      <div className="trusted-text">
        <h2>
          Trusted by 500+ <br /> global partners
        </h2>
        <p>
          The Recyclick is an official waste management partner with the world’s
          greatest organization.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
