import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./NewsLetter.css"
import { FaRegPaperPlane } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <Container className='text-center py-5 bg-light newsletter'>
            <h2 className='display-5 fw-semibold'>Subscribe to My Newsletter</h2>
            <p className='fw-semibold pt-3 text-black-50'>Get access to our latest recipes by joining the weekly newsletterr</p>
                <div className="d-flex justify-content-center py-4 pb-5">
                    <Form inline>
                    <Row>
                      <Col xs="auto">
                        <Form.Control
                          type="text"
                          placeholder="Enter your email address"
                          style={{ width: '286px' }}
                          className=" mr-sm-2"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button className='fw-semibold' type="submit">Submit <FaRegPaperPlane></FaRegPaperPlane></Button>
                      </Col>
                    </Row>
                    </Form>
                </div>
            
        </Container>
    );
};

export default NewsLetter;