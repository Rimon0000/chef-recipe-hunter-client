import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import "./Home.css"

const Home = () => {
    const [chefs, setChefs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])

    return (
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
    );
};

export default Home;