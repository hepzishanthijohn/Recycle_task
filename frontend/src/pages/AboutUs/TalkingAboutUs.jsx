import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import worker1 from '../../assets/IMAGES/worker.webp'
import worker2 from '../../assets/IMAGES/initiatives/tetraPak.webp'
import worker3 from '../../assets/IMAGES/initiatives/tetraPak.webp'
import "./TalkingAboutUs.css";


 

  const Workings = [
    {
      image: worker1, // Replace with actual image paths
      credit: "Whatsapp Business",
      desc: "The Recyclick was launched in 2014 and after the initial struggle, Anurag and his co-founder...",
    },
    {
      image: worker2,
      credit: "World Economic Forum",
      desc: "Recyclick is redefining the waste management value chain by bringing in efficiency, transparency...",
    },
    {
      image: worker3,
      credit: "YOURSTORY",
      desc: `The Recyclick aims to organise the waste collection vendor network. "As of now, there is no way to track."`,
    },
  ];
  
  const TalkingAboutUs = () => {
    return (
      <div className="workings-container">
        {Workings.map((item, index) => (
          <div key={index} className="workings-card">
            <img src={item.image} alt={item.credit} />
            <h4 className="workings-credit">Credit: {item.credit}</h4>
            <p className="workings-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    );
  };
  
  
  export default TalkingAboutUs;
  