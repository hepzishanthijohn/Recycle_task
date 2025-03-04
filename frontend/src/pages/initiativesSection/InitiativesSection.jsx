import React from "react";
import planting from '../../assets/IMAGES/initiatives/planting.avif';
import kitab from '../../assets/IMAGES/initiatives/kitab.webp';
import tetrapak from '../../assets/IMAGES/initiatives/tetraPak.webp'
import "./InitiativesSection.css";

const initiatives = [
  {
    title: "Tetra Pak Initiative",
    description:
      "The Recyclick collaborated with TetraPak India (World’s Leading Beverage Carton Manufacturer) to increase the collection of used beverage cartons (UBC’s) for recycling and diverting them from landfills.",
    image: tetrapak,
  },
  {
    title: "Tree Plantation Initiative",
    description:
      "Since the last two years, The Recyclick has been following a tradition of planting trees on the occasion of Mahatma Gandhi's Birthday. In which, our customers also take part in our mission to turn Bhopal greener.",
    image: planting,
  },
  {
    title: "Kitab Ghar",
    description:
      "Kitab Ghar initiative is a combined effort of The Recyclick & Bhopal Municipal Corporation that aims at providing second-hand books to the underprivileged children by acquiring them from the people who no longer need them.",
    image: kitab,
  },
];

const InitiativesSection = () => {
  return (
    <div className="initiatives-section">
      <h1>Our Initiatives</h1>
      <div className="initiatives-container">
        {initiatives.map((initiative, index) => (
          <div key={index} className="initiative-card">
            <img src={initiative.image} alt={initiative.title} />
            <h2>{initiative.title}</h2>
            <p>{initiative.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesSection;
