import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBookmark, FaHandPointRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({chef}) => {
    const [buttonVisible, setButtonVisible] = useState(true)

    //toast message
    const notify = () => {
        setButtonVisible(false)
        toast("This recipe added your favourite dish!");
    }
  
    
    const {id, chef_picture, chef_name,years_of_experience,num_of_recipes,likes, bio, recipes} = chef

    return (
        <>
          <Container>
              <h2 className='text-center fx-bold fs-1 m-4'>Recipes</h2>
              <Row>
                <Col>
                    <Container>
                    <Card style={{height:"478px"}}>
                         <Card.Img variant="top" src="" />
                         <Card.Body>
                           <Card.Title className='fw-bold fs-3'><p>Recipe Name: <span className='fw-semibold'>{recipes[0].title}</span></p></Card.Title>
                           <Card.Text className='fw-semibold'>
                             <p className='fw-bold'>ingredients: <span className='fw-semibold'>{`${recipes[0].ingredients}`}</span></p>
                           </Card.Text>
                           <Card.Text>
                               <p className='fw-bold'>Cooking Method: <span className='fw-semibold'>{`${recipes[0].cooking_method}`}</span></p>
                            </Card.Text>
                         </Card.Body>
                         <Card.Footer className='d-flex align-items-center'>
                               <p className='fw-bold flex-grow-1 mt-2'>Ratings: <span className='fw-semibold'>{`${recipes[0].rating}`}</span></p>
                               {
                                buttonVisible && (
                                    <FaBookmark onClick={notify} style={{fontSize:"1.5rem"}}/>
                                )
                               }
                               <ToastContainer />
                         </Card.Footer>
                    </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                    <Card style={{height:"478px"}}>
                         <Card.Img variant="top" src="" />
                         <Card.Body>
                           <Card.Title className='fw-bold fs-3'><p>Recipe Name: <span className='fw-semibold'>{recipes[1].title}</span></p></Card.Title>
                           <Card.Text className='fw-semibold'>
                             <p className='fw-bold'>ingredients: <span className='fw-semibold'>{`${recipes[1].ingredients}`}</span></p>
                           </Card.Text>
                           <Card.Text>
                               <p className='fw-bold'>Cooking Method: <span className='fw-semibold'>{`${recipes[1].cooking_method}`}</span></p>
                            </Card.Text>
                         </Card.Body>
                         <Card.Footer className='d-flex align-items-center'>
                               <p className='fw-bold flex-grow-1 mt-2'>Ratings: <span className='fw-semibold'>{`${recipes[1].rating}`}</span></p>
                               {
                                buttonVisible && (
                                    <FaBookmark onClick={notify} style={{fontSize:"1.5rem"}}/>
                                )
                               }
                         </Card.Footer>
                    </Card>
                    </Container>
                </Col>
                <Col>
                    <Container>
                    <Card style={{height:"478px"}}>
                         <Card.Img variant="top" src="" />
                         <Card.Body>
                           <Card.Title className='fw-bold fs-3'><p>Recipe Name: <span className='fw-semibold'>{recipes[2].title}</span></p></Card.Title>
                           <Card.Text className='fw-semibold'>
                             <p className='fw-bold'>ingredients: <span className='fw-semibold'>{`${recipes[2].ingredients}`}</span></p>
                           </Card.Text>
                           <Card.Text>
                               <p className='fw-bold'>Cooking Method: <span className='fw-semibold'>{`${recipes[2].cooking_method}`}</span></p>
                            </Card.Text>
                         </Card.Body>
                         <Card.Footer className='d-flex align-items-center'>
                               <p className='fw-bold flex-grow-1 mt-2'>Ratings: <span className='fw-semibold'>{`${recipes[2].rating}`}</span></p>
                               {
                                buttonVisible && (
                                    <FaBookmark onClick={notify} style={{fontSize:"1.5rem"}}/>
                                )
                               }
                         </Card.Footer>
                    </Card>
                    </Container>
                </Col>
                
                
              </Row>
        </Container>
        </>
    );
};

export default Recipes;