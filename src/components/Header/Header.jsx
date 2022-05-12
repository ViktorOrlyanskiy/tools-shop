import React from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import { HeaderLogin } from '../HeaderLogin/HeaderLogin';
import { getRole, getStatusAuth } from '../../pages/Login/utils/Login';
import { setUserAction } from '../../store/userReducer';
import { useDispatch } from 'react-redux';
import './Header.scss';

function Header({ }) {

    const dispatch = useDispatch();

    window.onload = function () {
        if (localStorage.getItem('email') !== null) {
            const user = {
                email: localStorage.getItem('email'),
                id: localStorage.getItem('uid'),
                token: localStorage.getItem('token'),
                role: getRole(localStorage.getItem('email'),),
                isAuth: getStatusAuth(localStorage.getItem('token'))
            }
            dispatch(setUserAction(user))
        }
    }


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