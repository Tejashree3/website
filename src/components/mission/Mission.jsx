import React from 'react';
import '../mission/mission.css';
import { FaHandshake, FaCheckCircle } from 'react-icons/fa'; // Import relevant icons
import mission from"../../assets/images/icons/mission.webp"
const Mission = () => {
  // JSON data as a JavaScript object
  const data = {

    imageSrc: "../../assets/images/icons/mission.webp",

    heading: "Our mission is simple: to make your property journey in Dubai as smooth as possible",
    subHeading: "WHO WE ARE",
    description: "We customize our services to meet your specific needs, ensuring every transaction—from start to finish—is straightforward and stress-free.",
    buttonText: "Contact",
    features: [
      {
        title: "Your Journey, Simplified",
        detail: "We ensure a hassle-free process, from our first meeting to the final handshake.",
        icon: <FaHandshake size={30} />
      },
      {
        title: "Trustworthy Guidance",
        detail: "Our practice is built on honesty, offering you reliable advice to make informed decisions.",
        icon: <FaCheckCircle size={30} />
      }
    ]
  };

  return (
    <div className="mission-container">
      <div className="image-section">
        <img
          src={mission}
          className="mission-image"
        />
      </div>

      <div className="content-section">
        <div className="about-us-section main_heading">
          <h5>{data.subHeading}</h5>
          <h1 className="invest-title">{data.heading}</h1>
          <p>{data.description}</p>
          <div className="buttons">
            <button className="learn-more">{data.buttonText}</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        {data.features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="feature-icon">{feature.icon}</div> {/* Display icon */}
           <div className=''>

            <h4>{feature.title}</h4>
            <p>{feature.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
