import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import "../Banner/banner.css";

const Banner1 = () => {
  return (
    <section className="slider">
      {/* Single Item Carousel */}
      <Carousel variant="dark" indicators={false} controls={false}>
        <Carousel.Item>
          <img src={sliderImg} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <p>REAL ESTATE</p>
              <h5 className="heading">Find Your Perfect Home in Dubai with</h5>
              <p className="sub_text">
                Your trusted partner in Dubai’s dynamic real estate market.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner1;
