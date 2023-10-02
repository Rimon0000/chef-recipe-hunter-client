import React from 'react';
import Header from '../Header/Header';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { FaHandPointRight, FaRegThumbsUp } from 'react-icons/fa';
import Recipes from '../Recipes/Recipes';
import './ChefRecipe.css'

const ChefRecipe = () => {
    const chef = useLoaderData()
    const {id, chef_picture, chef_name,years_of_experience,num_of_recipes,likes, bio, recipes} = chef
    // console.log(recife)

    return (
        <>
          <Container className='mt-5'>
            <Card>
             <Card.Img className='w-75 mx-auto'  variant="top" src={chef_picture} />
             <Card.Body className=' w-75 mx-auto'>
               <Card.Title className='fw-bold fs-1'>{chef_name}</Card.Title>
               <Card.Text className='fw-semibold'>
                 {bio}
               </Card.Text>
               <Card.Text className='d-flex pt-2 gap-5'>
                   <div>
                       <p className='fw-bold'>Experience: <span className='fw-semibold'>{years_of_experience} years</span></p>
                       <p className='fw-bold'>Number of Recipes: <span className='fw-semibold'>{num_of_recipes}</span></p>
                    </div>
                       <p className='fw-bold'><FaRegThumbsUp />: <span>{likes} Likes</span></p>
                </Card.Text>
             </Card.Body>
             </Card>
        </Container>
          <Container>
          <h2 className='text-center fx-bold fs-1 m-4'>Special Recipes</h2>
            <div className='chefRecipe-container'>
            {
              recipes.map(recipe => <Recipes recipe={recipe}></Recipes>)
            }
            </div>
          </Container>
        </>
    );
};

export default ChefRecipe;