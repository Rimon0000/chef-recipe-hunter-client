import React from 'react';
import Header from '../Header/Header';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const recife = useLoaderData()
    console.log(recife)
    return (
        <div>
            <h2>This is chef recife</h2>
        </div>
    );
};

export default ChefRecipe;