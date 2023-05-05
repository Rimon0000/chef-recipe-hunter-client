import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaBookmark, FaHandPointRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({recipe}) => {
  const {title, ingredients, cooking_method, rating} = recipe
    const [buttonVisible, setButtonVisible] = useState(true)

    //toast message
    const notify = () => {
        setButtonVisible(false)
        toast("This recipe added your favourite dish!");
    }
  
    return (
        <>
          <div>
              <Card style={{height:"549px"}}>
                   <Card.Img variant="top" src="" />
                   <Card.Body>
                     <Card.Title className='fw-bold fs-3'><p>Recipe Name: <span className='fw-semibold'>{title}</span></p></Card.Title>
                     <Card.Text className='fw-semibold'>
                       <p className='fw-bold'>ingredients: {ingredients.map(ingredient => <li className='fw-semibold'>{ingredient}</li>)}</p>
                     </Card.Text>
                     <Card.Text>
                         <p className='fw-bold'>Cooking Method: <span className='fw-semibold'>{cooking_method}</span></p>
                      </Card.Text>
                   </Card.Body>
                   <Card.Footer className='d-flex align-items-center'>
                         <p className='fw-bold flex-grow-1 mt-2'>Ratings: <span className='fw-semibold'>{rating}</span></p>
                         {
                          buttonVisible && (
                              <FaBookmark onClick={notify} style={{fontSize:"1.5rem"}}/>
                          )
                         }
                         <ToastContainer />
                   </Card.Footer>
              </Card>
        </div>
        </>
    );
};

export default Recipes;