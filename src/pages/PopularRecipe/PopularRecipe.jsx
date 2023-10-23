import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Recipe from './Recipe';
import "./PopularRecipe.css"
import { Container } from 'react-bootstrap';

const PopularRecipe = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-rimon0000.vercel.app/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.error(error))
    },[])

    return (
        <Container>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-50 mx-auto font-bold my-5 pb-2'>Most Popular Recipe</h2>
            <div className='recipe-container'>
                {
                    recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </Container>
    );
};

export default PopularRecipe;