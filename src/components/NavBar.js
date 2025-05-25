import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, useLocation } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home, scroll directly
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll after render
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <NavbarBrand onClick={() => navigateAndScroll('home-section')} className="navbar-logo">
          MyPortfolio
        </NavbarBrand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigateAndScroll('about-section')}>About</Nav.Link>
            <Nav.Link onClick={() => navigateAndScroll('project-section')}>Projects</Nav.Link>
            <Nav.Link onClick={() => navigateAndScroll('contact')}>Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigateAndScroll('Education')}>Education</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigateAndScroll('Work Experience')}>Work Experience</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigateAndScroll('Other Details')}>Other Details</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigateAndScroll('news')}>News</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigateAndScroll('support')}>Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;
