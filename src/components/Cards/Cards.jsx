import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Cards/card.css";

const Cards = ({ destination }) => {
  console.log("Destination data", destination);
  const truncateText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="img-box">
      {/* Navigation link for the card */}
      <NavLink
        className="body-text text-dark text-decoration-none"
     to={`/featureslider/${destination._id}`} // Include the destination.id here 
      >
        <Card>
       
          <NavLink
        className="featureimage"

      >
            <Card.Img
              variant="top"
          
              src={`${destination.images[0]}`} // Add the base URL for the image
              className="img-fluid"
              alt={destination.title}
            />
          </NavLink>
          <Card.Title>{destination.tag}</Card.Title>

          <span className="tours">
            <h5 className="main-title mb-2">
              {truncateText(destination.title, 25)}
            </h5>
            <p className="mt-1">
              <span className="aed">
                <strong>AED:</strong> {destination.price}{" "}
              </span>{" "}
              |<span className="tag">starting </span>
            </p>

            <div className="d-flex gap-3 mt-1">
              <span>{destination.bed} Bed</span>
              <span>{destination.bath} Bath</span>
              <span>{destination.size}</span>
            </div>

            <p className="mt-1 ">{destination.location}</p>

            <ul className="card-tags mt-1">
            <li>{destination.list1}</li>
              <li>{destination.list2}</li>
              <li>{destination.list3}</li>
            </ul>
          </span>
        </Card>
      </NavLink>
    </div>
  );
};

export default Cards;
