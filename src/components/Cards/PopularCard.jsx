import React from "react";
import "../Cards/card.css";
import "../Gallery/gallery.css"
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const PopularCard = ({ val }) => {
  // Generate an array of stars based on the rating value
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < val.rating ? "bi-star-fill" : "bi-star"; // Filled or empty star based on rating
  });

  // Truncate the title if it's longer than 40 characters
  const truncatedTitle = val.title.length > 50 ? val.title.substring(0, 50) + "..." : val.title;

  return (
    <Card className="rounded-2 shadow-sm popular">
      <NavLink
          className="body-text text-dark text-decoration-none"
          to={`/investmentSlider/${val._id}`} // Pass the id dynamically
          >
      <Card.Img
        variant="top"
        src={`http://localhost:5000${val.image}`}
        className="img-fluid  investment-img"
        alt="image"
      />
      <Card.Body>
        <Card.Text>
          <i className="bi bi-geo-alt"></i>
          <span className="text">{val.price}</span>
        </Card.Text>

        <Card.Title>
            {truncatedTitle}
        </Card.Title>

        <p className="reviwe">
          <span>
            {stars.map((star, index) => (
              <i key={index} className={`bi ${star} me-1`}></i>
            ))}
          </span>
        
        </p>

        <span className="badge">{val.tag}</span>
      </Card.Body>
            </NavLink>
    </Card>
  );
};

export default PopularCard;
