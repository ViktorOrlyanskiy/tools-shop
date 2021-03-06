import React from 'react';
import LoginForm from '../../../components/UI/Form/LoginForm';
import { useLogin } from '../../../hooks/useLogin';
import '../styles/Login.scss';

export const Login = ({ }) => {

    const { handleLogin } = useLogin();

    return (
        <div className='login-page'>
            <LoginForm handleClick={handleLogin} title={'Вход'} titleButton={'Войти'} />
        </div>
    )
};
