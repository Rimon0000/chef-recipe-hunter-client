import React from 'react';
import img1 from "../../assets/foodMenu/biriyani.jpg"
import img2 from "../../assets/foodMenu/elish.jpg"
import img3 from "../../assets/foodMenu/kala-buna.jpg"
import img4 from "../../assets/foodMenu/mejban.jpg"
import img5 from "../../assets/foodMenu/shorse-elish.jpg"
import img6 from "../../assets/foodMenu/vorta.jpg"
import { Card, Col, Container, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { FaRegThumbsUp, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import "./HolidaySpecial.css"

const HolidaySpecial = () => {
    return (
        <Container>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-50 mx-auto font-bold my-5 pt-5 pb-2'>Holiday Special Menu</h2>
        <Row className='px-4'>
            <Col>
                <Card>
                   <LazyLoad>
                   <Card.Img variant="top" src={img3} />
                   </LazyLoad>
                   <Card.Body>
                     <Card.Title className='fw-bold fs-3'>Mejban</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex justify-content-between fw-semibold pt-2 gap-3'>
                           <p className='fw-semibold'>Price: 400</p>
                           <div className='d-flex gap-3'>
                              <div>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                              </div>
                              <div>
                                <p className='pt-rating'>5</p>
                              </div>
                           </div>
                        </div>
                           <p className='fw-semibold'>Mejban meals typically feature generous portions of flavorful and often spicy 
                            meat dishes, with beef and mutton being popular choices.</p>
                     </Card.Text>
                   </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                   <LazyLoad>
                   <Card.Img variant="top" src={img5} />
                   </LazyLoad>
                   <Card.Body>
                     <Card.Title className='fw-bold fs-3'>Shorse Elish</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex justify-content-between fw-semibold pt-2 gap-3'>
                           <p className='fw-semibold'>Price: 250</p>
                           <div className='d-flex gap-3'>
                              <div>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                              </div>
                              <div>
                                <p className='pt-rating'>5</p>
                              </div>
                           </div>
                        </div>
                           <p className='fw-semibold'>Shorse Elish is typically prepared by marinating the Hilsa fish 
                           in the mustard paste and allowing it to soak up the flavors.</p>
                     </Card.Text>
                   </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                   <LazyLoad>
                   <Card.Img variant="top" src={img6} />
                   </LazyLoad>
                   <Card.Body>
                     <Card.Title className='fw-bold fs-3'>Bhorta Items</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex justify-content-between fw-semibold pt-2 gap-3'>
                           <p className='fw-semibold'>Price: 50</p>
                           <div className='d-flex gap-3'>
                              <div>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStarHalfAlt></FaStarHalfAlt>
                              </div>
                              <div>
                                <p className='pt-rating'>4.8</p>
                              </div>
                           </div>
                        </div>
                           <p className='fw-semibold'>"vorta" refers to a category of dishes that are 
                           essentially mashed or pureed preparations made from various vegetables, lentils, 
                           or even dried fish.</p>
                     </Card.Text>
                   </Card.Body>
                </Card>
            </Col>
           
            
          
        </Row>
            
        </Container>
    );
};

export default HolidaySpecial;