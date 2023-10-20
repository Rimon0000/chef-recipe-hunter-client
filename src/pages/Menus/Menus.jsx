import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Menu from './Menu';

const Menus = () => {
    const [menus, setMenus] = useState([])
    const [showSeeAllButton, setShowSeeAllButton] = useState(true);

    useEffect(() =>{
        fetch("https://chef-recipe-hunter-server-rimon0000.vercel.app/menus")
        .then(res => res.json())
        .then(data => setMenus(data.slice(0, 4)))
    },[])

    const seeAllHandler = () =>{
            fetch("https://chef-recipe-hunter-server-rimon0000.vercel.app/menus")
            .then(res => res.json())
            .then(data => setMenus(data))
            setShowSeeAllButton(false)
    }

    return (
        <Container>
            <h2 className='text-center fs-1 fw-semibold border-bottom border-primary w-25 mx-auto font-bold mt-5'>Our Menus</h2>
            <p className='text-center fs-5 fw-semibold'>Eat Your Favourite Food</p>
            <div className='mt-5'>
                {
                    menus?.map(menu => <Menu 
                        key={menu.id}
                        menu ={menu}></Menu>)
                }
            </div>
            <div className='text-center'>
            {showSeeAllButton && (
              <button onClick={seeAllHandler} className='btn btn-outline-primary text-center'>See All Menus</button>
             )}
            </div>
        </Container>
    );
};

export default Menus;