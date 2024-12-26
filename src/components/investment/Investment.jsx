import React from "react";
import "../investment/investment.css";

const Investment = () => {
  return (
    <div className="investment-container">
      <div className="about-us-section main_heading">
                <h5>
                INVESTMENT OPPORTUNITIES
                </h5>
                <h1 className="invest-title">Unlock Lucrative Real Estate Investments</h1>
              
        <div className="buttons">
          <button className="learn-more">LEARN MORE</button>
       
        </div>
      </div>
      <div className="stats-section">
        <div className="stat-item">
          <h3>01</h3>
          <p>EXPERT INSIGHTS</p>
        </div>
        <div className="stat-item">
          <h3>02</h3>
          <p>PRIME LOCATIONS</p>
        </div>
        <div className="stat-item">
          <h3>03</h3>
          <p>GUARANTEED RETURNS</p>
        </div>
     
      </div>
    </div>
  );
};

export default Investment;
