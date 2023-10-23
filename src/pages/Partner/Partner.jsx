import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../assets/logo images/img3.jpg"
import img2 from "../../assets/logo images/img6.jpg"
import img3 from "../../assets/logo images/img7.jpg"
import img4 from "../../assets/logo images/img8.jpg"
import img5 from "../../assets/logo images/img11.jpg"
import img6 from "../../assets/logo images/img12.jpg"
import img7 from "../../assets/logo images/img13.jpg"
import { Card, Container } from 'react-bootstrap';


const Partner = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-25 mx-auto font-bold my-5 pb-2'>Our Partners</h2>
            <div className='d-flex gap-5'>
              <Marquee className='text-danger' speed={100}>
               
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Macdonald</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-5'>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>DONUTS</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title>Zalando</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-5'>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title>PRADA</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img5} />
                  <Card.Body>
                    <Card.Title>N.B.C</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-5'>
                  <Card.Img variant="top" src={img6} />
                  <Card.Body>
                    <Card.Title>cOFFEE</Card.Title>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='me-5'>
                  <Card.Img variant="top" src={img7} />
                  <Card.Body>
                    <Card.Title>Canon</Card.Title>
                  </Card.Body>
                </Card>
               
              
            
              </Marquee>
            </div> 
        </Container>
    );
};

export default Partner;