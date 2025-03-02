import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from "../assets/img/projectneysa-logo.png";

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="white" variant="light" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontSize: '16px', fontWeight: 400 }}>
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#blogs" className="mx-2">Blogs</Nav.Link>
            <Button
              className="ms-3"
              style={{
                backgroundColor: '#EE9591',
                borderColor: '#EE9591',
                fontWeight: 500
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
