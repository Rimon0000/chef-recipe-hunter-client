import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import "./Home.css"
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import About from '../About/About';

const Home = () => {
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-rimon0000.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])

    return (
        <>
        <Banner></Banner>
        <Container className='mt-4'>
            <h3 className='text-center mb-4 fs-1'>Our Chef's</h3>
            <div className='chef-container'>
                {
                    chefs.map(chef => <Chef
                    key={chef.id}
                    chef={chef}
                    ></Chef>)
                }
            </div>
        </Container>
        <Review></Review>
        <About></About>
        </>
    );
};

export default Home;