import React from 'react';
import "./Menu.css"

const Menu = ({menu}) => {
    const {id, name, photo, description} = menu
    return (
        <div>
            <div className='display-flex gap-5 bg-dark text-white mb-4 rounded'>
                <div className='w-25'>
                    <img className='w-100 rounded' src={photo} alt="" />
                </div>
                <div className='w-75 py-2'>
                    <h2 className=' fs-1 fw-semibold border-bottom border-primary pb-2 font-bold'>{name}</h2>
                     <p className='fw-semibold'>{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Menu;