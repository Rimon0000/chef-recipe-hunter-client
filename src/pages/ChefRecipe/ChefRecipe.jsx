import React from 'react';
import Header from '../Header/Header';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { FaHandPointRight, FaRegThumbsUp } from 'react-icons/fa';
import Recipes from '../Recipes/Recipes';

const ChefRecipe = () => {
    const recipe = useLoaderData()
    const {id, chef_picture, chef_name,years_of_experience,num_of_recipes,likes, bio} = recipe
    // console.log(recife)
    return (
        <>
          <Container>
            <Card>
             <Card.Img variant="top" src={chef_picture} />
             <Card.Body>
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
            <Recipes recipe={recipe}></Recipes>
          </Container>
        </>
    );
};

export default ChefRecipe;