import React from 'react'
import "../about/about.css"

import about  from "../../assets/images/icons/blog1.webp"
import { NavLink } from 'react-router-dom';
import Values from '../values/Values';
import Banner1 from '../banner-1/Banner1';
import ClientReviewSlider from '../client/Clientslider';
import { Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Banner1/>
    <div className="aboutus container">

   <Values/>
    </div>
    <section className="background pt-6  pb-3">
        <Container>

          <Row>
            <ClientReviewSlider />
          </Row>
        </Container>
      </section>

    </>
  );
};

export default About;

