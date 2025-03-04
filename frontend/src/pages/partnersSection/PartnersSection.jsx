import React from "react";
import paytm from '../../assets/IMAGES/Trusted/paytm.png';
import domino from '../../assets/IMAGES/Trusted/Domino.png'
import tetra from '../../assets/IMAGES/Trusted/tetra.png'
import Larsen from '../../assets/IMAGES/Trusted/LT.png'
import ICICI from '../../assets/IMAGES/Trusted/ICIC.png'
import Decathlon from '../../assets/IMAGES/Trusted/deca.png'
import Hershey from '../../assets/IMAGES/Trusted/hershey.png'
import godrej from '../../assets/IMAGES/Trusted/goorej.png'
import Reliance from '../../assets/IMAGES/Trusted/reliance.png'
import './PartnersSection.css'
const partners = [
  { name: "Paytm", logo: paytm },
  { name: "Domino's", logo: domino},
  { name: "Tetra Pak", logo: tetra },
  { name: "Larsen & Toubro", logo: Larsen},
  { name: "ICICI Bank", logo: ICICI},
  { name: "Decathlon", logo:Decathlon },
  { name: "Hershey's", logo:Hershey },
  { name: "Godrej", logo: godrej },
  { name: "Reliance", logo: Reliance },
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
