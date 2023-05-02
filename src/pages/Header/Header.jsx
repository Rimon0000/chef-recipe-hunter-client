import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">The Grand Chef</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <Nav.Link href="#link">Login</Nav.Link>
                      
                    </Nav>
                    <Nav>
                      <Nav.Link href="#link">Profile</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
           </Navbar>
        </Container>
    );
};

export default Header;