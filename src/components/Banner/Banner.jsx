import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        {/* courousel start */}
        <Carousel variant="dark">
              
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">


                <p>

                REAL ESTATE
                </p>
                <h5 className="heading">



                Find Your Perfect Home in Dubai with 
                </h5>
                <p className="sub_text">
                Your trusted partner in Dubai’s dynamic real estate market.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
            <div className="slider_des">

              <p>

                REAL ESTATE
              </p>


                <h5 className="heading">
                Find Your Perfect Home in Dubai with
                </h5>


                <p className="sub_text">

                Your trusted partner in Dubai’s dynamic real estate market.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
};

export default Banner;
