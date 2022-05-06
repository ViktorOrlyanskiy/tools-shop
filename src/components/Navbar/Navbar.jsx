import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='menu__list'>
                <Link to='orders' className='menu__item'>Orders</Link>
            </ul>
        </nav>
    )
}