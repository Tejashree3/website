import React from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/fenr_reality (2).png";
const Footer = () => {
  return (
    <footer className="pt-5">
      <Container>
        <Row>

          <Col md="3" sm="12" className="company_info mt-3 mt-md-0">
            <div className="company_details">
              {/* Company Logo */}
              <img
                src={logo}
                alt="Company Logo"
                className="company-logo"
                style={{
                  width: "90px",
                  backgroundColor: "white",
                  marginBottom: "10px",
                }}
              />

              <p>Our story is one of continuous growth and evolution.</p>
            </div>
          </Col>

          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
            <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">Home</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/about">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/services">Services</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/contact">Contact Us</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md="3" sm="12" className="contact_info mt-3 mt-md-0">
            <h4 className="mt-lg-0 mt-sm-3">Contact Info</h4>

            <div className="d-flex align-items-top my-2">
              <i className="bi bi-envelope me-3"></i>
              <a
                target="_blank"
                href="mailto:example@gmail.com"
                className="d-block"
              >
                example@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-top">
              <i className="bi bi-telephone me-3"></i>
              <a target="_blank" href="tel:+919876543210" className="d-block">
                +91 98765 43210
              </a>
            </div>
          </Col>

          <Col md="3" sm="12" className="newsletter mt-3 mt-md-0">
            <h4 className="mt-lg-0 mt-sm-3">Subscribe to Our Newsletter</h4>
            <Form>
              <Form.Group controlId="newsletterEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="mb-2"
                />
              </Form.Group>
              <Button type="submit" className="primaryBtn d-none d-sm-inline-block">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <Row className="py-2 bdr mt-3">
          <Col className="col copyright">
            <p className="text-light">@ 2024 All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
