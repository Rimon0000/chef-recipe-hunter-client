import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaGoogle, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/logo/logo.png"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Container className='d-flex gap-5 bg-dark text-white  px-5 pt-2' style={{height: "200px"}}>
            <div className='mt-4'>
                <Link to='/' className='mr-3 logo'>
                  <img className='w-25 rounded-lg mb-1' src={logo} alt='' />
                </Link>
              <p>Cookiteer.<br/>Providing reliable Chef and Recife's since 2020</p>
            </div> 
            <div className="col-lg-3 col-md-6 mb-4 ms-3 ps-3">
               <h5 className="my-3">services</h5>
               <ul className="list-unstyled mb-0">
                 <li className="mb-1">
                   <a style={{textDecoration:"none"}} href="" >Cooking</a>
                 </li>
                 <li className="mb-1">
                   <a style={{textDecoration:"none"}} href="" >Recife</a>
                 </li>
                 <li className="mb-1">
                   <a style={{textDecoration:"none"}} href="" >Chef</a>
                 </li>
                 <li>
                   <a style={{textDecoration:"none"}} href="" >Self Investment</a>
                 </li>
               </ul>
             </div>
          <div className='flex-grow-1 pt-4 w-25 mt-5'>
               <a className='px-2' href="">
                    <FaFacebookSquare style={{fontSize: "2rem"}} ></FaFacebookSquare>
                </a>
                <a className='px-2' href="">
                <FaGoogle style={{fontSize: "2rem"}} ></FaGoogle>
                </a>
                <a className='px-2' href="">
                <FaInstagram style={{fontSize: "2rem"}} ></FaInstagram>
                </a>
          </div>
          <div className='pt-3 w-25 mt-5'>
             <p>© All Rights Reserved by cookisteer</p>
          </div>   
        </Container>
    );
};

export default Footer;