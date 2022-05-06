import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

function Header({ }) {

    return (
        <header className='header'>
            <Link to='catalog' className="header__title">Tools Shop</Link>
            <div className="header__menu">
                <Navbar />
            </div>
            <div className="header__button header-btn__cart">

                <CartButton />
            </div>
        </header>
    )
};
export default Header;