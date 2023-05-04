import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import about1 from "../../assets/about-1.jpg"
import about2 from "../../assets/about-2.jpg"
import about3 from "../../assets/about-3.jpg"
import about4 from "../../assets/about-4.jpg"

const About = () => {
    return (
        <Container className='mt-5'>
            <h1 className='text-center fs-1 fw-semibold m-4'>About Us</h1>
            <Row sm={1} lg={2}>
               <Col sm={1} className='d-flex gap-1 mt-2'>
               <div>
               <Image src={about1} thumbnail />
               <Image src={about2} thumbnail />
               </div>
               <div>
               <Image src={about3} thumbnail />
               <Image src={about4} thumbnail />
               </div>
               </Col>
               <Col>
                 <h3 className='text-center fs-2 fw-semibold mt-5'>Welcome to Cookiteer</h3>
                 <div className='fw-semibold mt-3'>
                 <p>
                 "Cookiteer", a Korean restaurant that celebrates the rich flavors and 
                 traditions of Korean cuisine. Our menu features a range of dishes that are made 
                 with the freshest ingredients, sourced locally whenever possible. 
                 Our chef brings years of experience to the kitchen, 
                 and creates dishes that are both authentic and innovative.
                 </p>
                 <p>
                 One of our specialties is Korean barbecue, which is cooked right at your table 
                 for a unique and interactive dining experience. We use only the finest meats and seafood, 
                 and our marinades and sauces are made in-house for a truly authentic taste
                 </p>
                 </div>
                 <Button variant="secondary">Read More</Button>
               </Col>
          </Row>
        </Container>
    );
};

export default About;