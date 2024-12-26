import React, { useEffect, useState } from "react";
import "../service/service.css";
import backgroundImage from "../../assets/images/gallery/g1.jpg"; 
import {
  FaSearch,
  FaHome,
  FaBed,
  FaBuilding,
  FaChartLine,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Service = () => {
  // State to store the fetched service data
  const [services, setServices] = useState([]);
  
  // State to handle loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch service data from API when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/services/");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);  // Set the fetched services data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);  // Set loading to false after fetching
      }
    };

    fetchServices();
  }, []); // Empty array ensures this effect runs once when the component mounts

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="services-container">
      <div className="services-cards">
        {/* Map through the fetched services data */}
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">              <img src={`http://localhost:5000/${service.image}`} className="service-icon-img" alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
