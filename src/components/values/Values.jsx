import React from "react";
import "../values/value.css";
import about1 from "../../assets/images/icons/about1.webp";
const Values = () => {
  return (
    <div className="container">
      <div className="values">
        {/*start about imge  */}
        <div className="app-display">
          <img src={about1} alt="Phone App Display" className="phone-image" />
        </div>

        {/*end about imge  */}

        <div className="steps-container">
          {/*start about descriptin  */}
          <h2 className="steps-heading">Our Values</h2>
          <p className="values-description">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
          {/*end about descriptin  */}

          {/*start about values icon description  */}
          <div className="values-grid">
            <div className="value-item">
              <div className="icon-container">
                <span className="icon">⭐</span>
              </div>
              <div className="value-desc">
                <h3>Trust</h3>
                <p>
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="icon-container">
                <span className="icon">🎓</span>
              </div>
              <div className="value-desc">
                <h3>Excellence</h3>
                <p>
                  We set the bar high for ourselves. From our properties to our
                  services.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="icon-container">
                <span className="icon">👥</span>
              </div>
              <div className="value-desc">
                <h3>Client-Centric</h3>
                <p>
                  Your dreams are at the center of our universe. We listen and
                  understand.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="icon-container">
                <span className="icon">⭐</span>
              </div>
              <div className="value-desc">
                <h3>Our Commitment</h3>
                <p>
                  We are dedicated to providing you with the highest level of
                  service.
                </p>
              </div>
            </div>
          </div>

          {/*end about values icon description  */}
        </div>
      </div>
    </div>
  );
};

export default Values;
