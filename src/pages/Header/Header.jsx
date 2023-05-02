import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand href="#home">COOKITEER</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">
                        <Link className='text-decoration-none' to="/">Home</Link>
                      </Nav.Link>
                      <Nav.Link href="#link">
                        <Link className='text-decoration-none'>Blog</Link>
                      </Nav.Link>
                      <Nav.Link href="#link">
                        <Link className='text-decoration-none' to="/login">Login</Link>
                      </Nav.Link>
                      
                    </Nav>
                    <Nav>
                      <Nav.Link href="#link">
                      <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
           </Navbar>
        </Container>
    );
};

export default Header;