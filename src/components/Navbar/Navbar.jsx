import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Login</Link>
            <Link to='catalog'>Catalog</Link>
            <Link to='cart'>Cart</Link>
            <Link to='orders'>Orders</Link>
        </nav>
    )
}