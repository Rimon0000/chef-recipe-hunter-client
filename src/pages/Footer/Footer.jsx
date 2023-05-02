import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaGoogle, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container className='d-flex gap-5 bg-light  px-5 pt-2' style={{height: "150px"}}>
            <div class="">
                <h3 class="contact-title">Contact</h3>
                 <p>Email : info@gmail.com</p>
                 <p className='mt-0'>Phone : 01500-003400</p>
          </div>
          <div className='flex-grow-1 pt-4 ps-5'>
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
          <div className='pt-2 text-center'>
             <p>© All Rights Reserved. Designed by cookisteer</p>
          </div>   
        </Container>
    );
};

export default Footer;