import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img1 from "../../assets/recipe/img1.jpg"
import img2 from "../../assets/recipe/img2.jpg"
import img3 from "../../assets/recipe/img3.jpg"
import img4 from "../../assets/recipe/img4.jpg"
import img5 from "../../assets/recipe/img5.jpg"
import img6 from "../../assets/recipe/img6.jpg"
import { FaCalendarAlt, FaStar } from 'react-icons/fa';

const Article = () => {
    return (
        <Container className='mb-4'>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-25 mx-auto font-bold my-5 pb-2'>Our Blog</h2>
            <Row className='px-4'>
            <Col>
                <Card>
                   <Card.Img variant="top" src={img2} />
                   <Card.Body>
                     <Card.Title className='fw-bold fs-5'>Cheesecake Pastry Marshmallow</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex gap-1 fw-semibold'>
                        <FaCalendarAlt className='mt-1'></FaCalendarAlt>
                        <p className='border-bottom border-dashed'>June 7, 2021 |</p>
                        </div>
                        <p className='fw-semibold'>Ice cream sweet roll candy applicake marzipan chocolate cake 
                        caramels. Liquorice wypas gummi bears muffin...</p>
                     </Card.Text>
                     <Button variant="outline-info">Read More</Button>
                   </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                   <Card.Img variant="top" src={img3} />
                   <Card.Body>
                     <Card.Title className='fw-bold fs-5'>Bonbon Toffee Jelly</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex gap-1 fw-semibold'>
                        <FaCalendarAlt className='mt-1'></FaCalendarAlt>
                        <p className='border-bottom border-dashed'>August 2, 2022 |</p>
                        </div>
                        <p className='fw-semibold'>Bonbon toffee jelly beans cupcake gingerbread sweet roll 
                        chocolate cake croissant fruitcake. Chocolate sugar...</p>
                     </Card.Text>
                     <Button variant="outline-info">Read More</Button>
                   </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                   <Card.Img variant="top" src={img6} />
                   <Card.Body>
                     <Card.Title className='fw-bold fs-5'>Sugar Plum Macaroon Dessert</Card.Title>
                     <Card.Text className=''>
                       <div className='d-flex gap-1 fw-semibold'>
                        <FaCalendarAlt className='mt-1'></FaCalendarAlt>
                        <p className='border-bottom border-dashed'>Feb 21, 2023 |</p>
                        </div>
                        <p className='fw-semibold'>Liquorice gummies tootsie roll pie gingerbread lemon drops. 
                        Candy pie jelly beans cookie toffee. Pudding...</p>
                     </Card.Text>
                     <Button variant="outline-info">Read More</Button>
                   </Card.Body>
                </Card>
            </Col>
           
           
            
          
        </Row>    
        </Container>
    );
};

export default Article;