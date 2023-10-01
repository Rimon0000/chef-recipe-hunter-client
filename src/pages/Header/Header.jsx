import React, { useContext, useState } from 'react';
import { Card, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import logo from "../../assets/logo/logo.png"
import "./Header.css"





const Header = () => {
  const {user, logOut} = useContext(AuthContext)

    //sign out
    const handleLogOut = () =>{
        logOut()
        .then( () =>{
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <Container className='text-white'>
            <Navbar bg="black" expand="lg">
                <Container className='nav-display'>
                  <div>
                  <Navbar.Brand href="#home" className='text-white'>
                    <Link className='logo'>
                    <img src={logo} alt="" /></Link>
                    COOKITEER</Navbar.Brand>
                  </div>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
                 <div>
                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                     <NavLink className= {({ isActive }) => (isActive ? 'text-white' : 'default')} 
                      style={{ margin: "8px",textDecoration: "none",}} 
                      to="/">Home
                      </NavLink>

                      <NavLink className={({ isActive }) => (isActive ? 'text-white' : 'default')} 
                      style={{ margin: "8px",textDecoration: "none",}} 
                      to="/blog">Blog
                       </NavLink>

                       <NavLink className={({ isActive }) => (isActive ? 'text-white' : 'default')} 
                      style={{ margin: "8px",textDecoration: "none",}} 
                      to="/login">Login
                       </NavLink>

                       <NavLink className={({ isActive }) => (isActive ? 'text-white' : 'default')} 
                      style={{ margin: "8px",textDecoration: "none",}} 
                      to="/register">Register
                       </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                 </div>
                  <div>
                  {
                    
                    user ?
                    <div>   
                        <Image style={{width:"45px"}} src={user?.photoURL} roundedCircle data-toggle="tooltip" data-placement="top" title={user?.displayName} />
                        <button onClick={handleLogOut} className="btn btn-xs fw-semibold">Sign out</button>
                    </div> : 
                    <>
                      <NavLink className={({ isActive }) => (isActive ? 'text-white' : 'default')} 
                      style={{ margin: "8px",textDecoration: "none", fontWeight:"bold"}} 
                      to="/login">Login
                      </NavLink>
                    </> 
                  }
                  </div>
                
                </Container>
           </Navbar>
        </Container>
    );
};

export default Header;