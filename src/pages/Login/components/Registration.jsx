import React from 'react';
import LoginForm from '../../../components/UI/Form/LoginForm';
import { useLogin } from '../../../hooks/useLogin';
import '../styles/Login.scss';

export const Registration = ({ }) => {

    const { handleRegistration } = useLogin();

    return (
        <div className='login-page'>
            <LoginForm handleClick={handleRegistration} title={'Регистрация'} titleButton={'Зарегистрироваться'} />
        </div>
    )
};
