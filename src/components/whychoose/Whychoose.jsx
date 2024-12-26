import React from 'react';
import { FaList, FaCogs, FaShareAlt } from 'react-icons/fa'; // Import icons
import '../whychoose/whychoose.css';

const Whychoose = () => {
  const data = [
    {
      icon: <FaList />, // Icon for the first card
      description: 'We create a professional listing for your property to attract potential tenants or buyers.'
    },
    {
      icon: <FaCogs />, // Icon for the second card
      description: 'Our team handles everything, from tenant inquiries to maintenance requests, ensuring your property is well-cared for.'
    },
    {
      icon: <FaShareAlt />, // Icon for the third card
      description: 'We promote your property on real estate platforms and social media channels to reach a wide audience.'
    }
  ];

  return (
    <div className="whychoose-container">
      <div className="whychoose-content">
        <div className="cards-section">
          {data.map((item, index) => (
            <div className={`cards ${index === 1 ? 'middle-cards' : ''}`} key={index}>
              <div className="icon">{item.icon}</div> {/* Display the icon */}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
