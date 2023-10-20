import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import review from "../../assets/review.jpg"
import './Review.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import customer1 from "../../assets/customer/customer1.jpg"
import customer2 from "../../assets/customer/customer2.jpg"
import customer3 from "../../assets/customer/customer3.jpg"


const Review = () => {
    return (
        <>
        <Container>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-50 mx-auto font-bold my-5 pb-2'>Our Client Say !!</h2>
            <Row className='review-container gap-5'>
                <Col sm={1} className='review-img w-50'>
                    <Image src={review} thumbnail />
                </Col>
                <Col className='w-50'>
                 <Carousel>
                    <div>
                        <img className='w-100' src={customer1} />
                        <p className="legend fw-bold fs-6">
                        I recently visited a new restaurant called "Savor" and I was pleasantly 
                        surprised by the experience. The restaurant had a modern and chic decor, with a 
                        cozy ambiance that made it feel inviting. The menu had a variety of options, 
                        ranging from vegetarian to meat dishes, and everything sounded delicious.
                        </p>
                        <div>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                    </div>
                    <div>
                        <img className='w-100' src={customer2} />
                        <p className="legend fw-bold fs-6">
                        I ordered the grilled salmon with roasted vegetables and it was 
                        cooked to perfection. The salmon was flaky and moist, and the roasted vegetables 
                        had a nice char and were seasoned well. The dish was also beautifully presented.
                        </p>
                        <div>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                        </div>
                    </div>
                    <div>
                        <img className='w-100' src={customer3} />
                        <p className="legend fw-bold fs-6">
                        The service was exceptional, with the staff being attentive and friendly. 
                        The restaurant had a nice wine list as well, which was a nice touch.
                        </p>
                        <div>
                        <FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                        </div>
                    </div>
                </Carousel>
               </Col>
            </Row>
        </Container>
        
        </>
    );
};

export default Review;