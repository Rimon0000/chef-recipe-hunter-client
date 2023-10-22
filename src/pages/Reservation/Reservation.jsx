import React from 'react';
import "./Reservation.css"
import { Container, Form } from 'react-bootstrap';

const Reservation = () => {
    return (
        <Container>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-25 mx-auto font-bold mt-5'>Reservation</h2>
            <p className='text-center fs-5 fw-semibold'>Book Your Table</p>
            
            <div className="bg-image text-white">
            <Form className='w-50 mx-auto'>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label className='mt-3'>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label className='mt-1'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label className='mt-1'>Phone</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label className='mt-1'>Number of Guest:</Form.Label>
                <Form.Control type="number" placeholder="Guest No:" />
              </Form.Group>
              <Form.Group className="mb-2 pb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Label>message</Form.Label>
                <Form.Control as="textarea" placeholder="message" rows={3} />
              </Form.Group>
            </Form>
            </div>

        </Container>
    );
};

export default Reservation;