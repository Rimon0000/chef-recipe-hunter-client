import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <Container>
             <div className='img-container'>
                    <img style={{height: "500px"}} className='w-100' src={banner} alt="" />
             </div>
             <div style={{position:"absolute" ,top:"250px",right:"270px",padding:"20px", color:"white"}}>
                <h2 className='mb-3'>No matter how you cook, Yumma has many the recipes</h2>
                <Button variant="secondary">EXPLORE RECIPE</Button>
             </div>
        </Container>
    );
};

export default Banner;