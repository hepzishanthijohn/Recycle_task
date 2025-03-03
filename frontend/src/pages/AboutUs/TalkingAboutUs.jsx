import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./TalkingAboutUs.css";

const TalkingAboutUs = () => {
  const testimonials = [
    {
      quote: "Recyclclick has transformed how we think about waste management. Their impact is truly inspiring!",
      name: "Priya Sharma",
      role: "Environmental Activist",
    },
    {
      quote: "A great initiative that contributes towards sustainability. Highly recommend their services!",
      name: "Amit Verma",
      role: "Eco-Entrepreneur",
    },
    {
      quote: "Their efforts in reducing landfill waste are commendable. Keep up the great work!",
      name: "Neha Singh",
      role: "Sustainability Blogger",
    },
  ];

  return (
    <div className="talking-about-us">
      <h2>What People Say About Us</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="quote">"{testimonial.quote}"</p>
            <h4>{testimonial.name}</h4>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkingAboutUs;



// import React from "react";
// import './TalkingAboutUs.css'

// const TalkingAboutUs = () => {
//   return (
//     <section className="talking-section p-10 bg-white">
//       <div className="text-center mb-8">
//         <h2 className="text-green-700 text-5xl font-bold">They Love Talking about us!</h2>
//         <p className="text-gray-600 mt-2">Know The Kabadiwala from another side of the table.</p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-gray-100 p-5 rounded-2xl shadow-md">
//           <img
//             src="/images/whatsapp-business.jpg"
//             alt="Whatsapp Business"
//             className="rounded-lg w-full h-48 object-cover"
//           />
//           <h3 className="text-green-700 font-bold mt-4">Credit: Whatsapp Business</h3>
//           <p className="text-gray-700 mt-2">The Recyclick was launched in 2014 and after the initial struggle, Anurag and his co-founder...</p>
//         </div>
//         <div className="bg-gray-100 p-5 rounded-2xl shadow-md">
//           <img
//             src="/images/world-economic-forum.jpg"
//             alt="World Economic Forum"
//             className="rounded-lg w-full h-48 object-cover"
//           />
//           <h3 className="text-green-700 font-bold mt-4">Credit: World Economic Forum</h3>
//           <p className="text-gray-700 mt-2">Recyclick is redefining the waste management value chain by bringing in efficiency, transparency...</p>
//         </div>
//         <div className="bg-gray-100 p-5 rounded-2xl shadow-md">
//           <img
//             src="/images/yourstory.jpg"
//             alt="YOURSTORY"
//             className="rounded-lg w-full h-48 object-cover"
//           />
//           <h3 className="text-green-700 font-bold mt-4">Credit: YOURSTORY</h3>
//           <p className="text-gray-700 mt-2">The Recyclick aims to organise the waste collection vendor network. “As of now, there is no way to track.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TalkingAboutUs;
