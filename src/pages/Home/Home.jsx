import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Gallery from "../../components/Gallery/Gallery";
import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";
import Contact from "../../components/Contact/Contact";
import Service from "../../components/service/Service";
import About from "../../components/about/About";
import Clientslider from "../../components/client/Clientslider";
import Whychoose from "../../components/whychoose/Whychoose";
import Investment from "../../components/investment/Investment";
import Mission from "../../components/mission/Mission";

import axios from "axios";
const Home = () => {
  const [destinationsData, setDestinationsData] = useState([]);
  const [popularsData, setPopularsData] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/investments/list");
        console.log(response)
        const data = await response.json();
        setPopularsData(data.data); // Assuming response contains a "data" field
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("http://localhost:5000/api/features/list")
      .then((response) => {

        // Update state with the API response data
        setDestinationsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching destinations data:", error);
      });
  }, []);

  

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>

      <Banner />
      <AdvanceSearch />


      <section className="background py-5">
        <Container>
          <Row>

          </Row>
          <Mission />
        </Container>
      </section>


      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h5>FEATURED</h5>
                <h1>Top Listed Properties</h1>
                <p>Explore a curated section of our standout listings.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return <Cards destination={destination} key={inx} />;
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Features end /> */}

      {/* <services /> */}
      <section className="background py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h5>Our Servics</h5>
                <h1>Real Estate Solutions for Investors and Residents Alike</h1>
              </div>
            </Col>
          </Row>
          <Service />
        </Container>
      </section>
      {/* <services /> end */}


       <section className="popular py-5">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1>Top Investment Opportunities</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {popularsData.length > 0 ? (
            popularsData.map((val, inx) => (
              <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                <PopularCard val={val} />
              </Col>
            ))
          ) : (
            <p>Loading...</p> // Optional: display a loading message while fetching
          )}
        </Row>
      </Container>
    </section>


      {/* end investment card */}
      {/* start client slider */}

      <section className="background pt-6  pb-3">
        <Container>
          <Row></Row>
          <Row>
            <Clientslider />
          </Row>
        </Container>
      </section>

      <section className=" py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h5>Let us handle the details</h5>
                <h1>Get Your Property Listed With Us</h1>
                <h5>
                  Let us take the hassle out of listing and managing your
                  property.
                </h5>
                <h1>Why Choose Our Property Management Service?</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Whychoose />
          </Row>
        </Container>
      </section>

      <section className=" background py-5">
        <Container>
          <Row>
            <Investment />
          </Row>
        </Container>
      </section>

      {/* end client slider */}

      {/* start download section */}
      <section className="call_us ">
        <Container>
          <Row className="align-items-center d-flex flex-column">
            <Col md="8" className="mb-3">
              <h2 className="heading text-center">
                Download a free copy of our expert guide!
              </h2>

              <form className="">
                <div className="form-group first">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                  />
                </div>
              </form>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      {/* end download section */}
    </>
  );
};

export default Home;
