import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegThumbsUp, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    const {id, title, photo, ingredients, cooking_method, rating, likes} = recipe
    return (
        <div className='border border-primary bg-light'>

           <div className='d-flex gap-5 mb-4 rounded'>
                <div className='w-25'>
                    <img className='w-100 rounded text-center m-3 pt-2' src={photo} alt="" />
                </div>
                <div className='w-75 py-2'>
                    <h4 className=' fw-semibold border-bottom border-primary pb-2'>{title}</h4>
                     <div className='d-flex fw-semibold pt-2 gap-5'>
                        <p><FaRegThumbsUp />: {likes} Likes</p>
                        <div className='d-flex gap-3'>
                              <div>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStarHalfAlt></FaStarHalfAlt>
                              </div>
                              <div>
                                <p className='pt-rating'>{rating}</p>
                              </div>
                           </div>
                     </div>
                     <Link to={`/recipes/${id}`}><Button variant="outline-secondary">View Recipes</Button></Link>
                </div>
            </div>  
        </div>
    );
};

export default Recipe;