import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const recipes = useLoaderData()
    const recipeId = useParams()

    const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId.id)) 
    const {id, title, photo, ingredients, cooking_method, rating, likes} = recipe

    console.log(recipe)
    return (
        <Container className='mt-5'>
            <Card className='w-50 mx-auto ps-4'>
                   <Card.Img className='w-75 mx-auto' variant="top" src={photo} />
                   <Card.Body>
                     <Card.Title className='fw-bold'><p>Recipe Name: <span className='fw-semibold'>{title}</span></p></Card.Title>
                     <Card.Text className='fw-semibold'>
                       <p className='fw-bold'>ingredients: {ingredients.map(ingredient => <li className='fw-semibold'>{ingredient}</li>)}</p>
                     </Card.Text>
                     <Card.Text>
                         <p className='fw-bold'>Cooking Method: <span className='fw-semibold'>{cooking_method}</span></p>
                      </Card.Text>
                   </Card.Body>
                   <Card.Footer className='d-flex align-items-center'>
                   <Link to={"/"}><Button variant="outline-secondary">Back to Home</Button></Link>
                   </Card.Footer>
              </Card>   
        </Container>
    );
};

export default RecipeDetails;