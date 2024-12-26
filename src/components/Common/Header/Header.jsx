import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
import logo from "../../../assets/images/icons/fenr_reality.png";
import stickyLogo from "../../../assets/images/icons/Primary_logo.png"; // Add your sticky logo here

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    if (scrollTop >= 120) {
      setIsStickyHeader(true);
      header.classList.add('is-sticky');
    } else {
      setIsStickyHeader(false);
      header.classList.remove('is-sticky');
    }
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/">
              <img className="logo" src={isStickyHeader ? stickyLogo : logo} alt="Logo" />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/* Mobile Logo Section */}
            <Offcanvas.Header>
              <NavLink to="/">
                <img className="logo" src={isStickyHeader ? stickyLogo : logo} alt="Logo" />
              </NavLink>

              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>

                <NavDropdown title="DESTINATION" id={`offcanvasNavbarDropdown-expand-lg`}>
                  <NavLink className="nav-link text-dark" to="/">
                    SPAIN TOURS
                  </NavLink>
                </NavDropdown>
                <NavLink className="nav-link" to="/blog">
                  BLOG
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block" to="/contact">
              Contact us
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
