import React from "react";
import "./InitiativesSection.css";

const initiatives = [
  {
    title: "Tetra Pak Initiative",
    description:
      "The Recyclick collaborated with TetraPak India (World’s Leading Beverage Carton Manufacturer) to increase the collection of used beverage cartons (UBC’s) for recycling and diverting them from landfills.",
    image: "tetra-pak.jpg",
  },
  {
    title: "Tree Plantation Initiative",
    description:
      "Since the last two years, The Recyclick has been following a tradition of planting trees on the occasion of Mahatma Gandhi's Birthday. In which, our customers also take part in our mission to turn Bhopal greener.",
    image: "tree-plantation.jpg",
  },
  {
    title: "Kitab Ghar",
    description:
      "Kitab Ghar initiative is a combined effort of The Recyclick & Bhopal Municipal Corporation that aims at providing second-hand books to the underprivileged children by acquiring them from the people who no longer need them.",
    image: "kitab-ghar.jpg",
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
