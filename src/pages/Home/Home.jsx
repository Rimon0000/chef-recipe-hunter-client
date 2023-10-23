import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import "./Home.css"
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import About from '../About/About';
import Reservation from '../Reservation/Reservation';
import Menus from '../Menus/Menus';
import HolidaySpecial from '../HolidaySpecial/HolidaySpecial';
import NewsLetter from '../NewsLetter/NewsLetter';
import Article from '../Article/Article';
import PopularRecipe from '../PopularRecipe/PopularRecipe';
import Partner from '../Partner/Partner';


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
        <Container>
            <h3 className='text-center fs-1 fw-semibold border-bottom border-primary w-25 mx-auto font-bold my-5 pt-5'>Our Chef's</h3>
            <div className='chef-container'>
                {
                    chefs.map(chef => <Chef
                    key={chef.id}
                    chef={chef}
                    ></Chef>)
                }
            </div>
        </Container>
        <Menus></Menus>
        <HolidaySpecial></HolidaySpecial>
        <PopularRecipe></PopularRecipe>
        <Review></Review>
        <About></About>
        <Reservation></Reservation>
        <Article></Article>
        <Partner></Partner>
        <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;