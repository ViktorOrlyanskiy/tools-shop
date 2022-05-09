import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import './HeaderLogin.scss';

export const HeaderLogin = () => {

    const isAuth = useSelector(state => state.user.user.isAuth);
    const handleLogout = useLogout();


    return (
        <nav className='header__login login'>

            {isAuth
                ?
                <div className='login__row'>
                    <Link to='orders' className='login__item'>Личный кабинет</Link>
                    <Link to='catalog' className='login__item' onClick={handleLogout}>Выйти</Link>
                </div>

                :
                <Link to='login' className='login__row'>
                    <div className='login__item'>Вход | Регистрация</div>
                </Link>
            }
        </nav>
    )
}