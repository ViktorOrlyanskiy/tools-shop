import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import { HeaderLogin } from '../HeaderLogin/HeaderLogin';
import './Header.scss';

function Header({ }) {

    return (
        <header className='header'>
            <Link to='catalog' className="header__title">Tools Shop</Link>

            <div className="header__buttun">
                <HeaderLogin />
                <CartButton />
            </div>
        </header>
    )
};
export default Header;