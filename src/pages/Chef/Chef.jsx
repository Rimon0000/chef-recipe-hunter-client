import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHandPointRight, FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {id, chef_picture, chef_name,years_of_experience,num_of_recipes,likes} = chef
    return (
        <div>
            <Card>
               <Card.Img variant="top" src={chef_picture} />
               <Card.Body>
                 <Card.Title className='fw-bold fs-3'>{chef_name}</Card.Title>
                 <Card.Text className='d-flex fw-semibold pt-2 gap-5'>
                   <div>
                       <p className='fw-semibold'>Experience: {years_of_experience} years</p>
                       <p>Number of Recipes: {num_of_recipes}</p>
                    </div>
                       <p><FaRegThumbsUp />: {likes} Likes</p>
                 </Card.Text>
                 <Link to={`/chefrecipe/${id}`}><Button variant="outline-secondary">View Recipes</Button></Link>
               </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;