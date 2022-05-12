import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({ title, handleClick, titleButton }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email!')
        }
        else {
            setEmailError('')
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value < 6) {
            setPasswordError('Не менее 6 символов и 1 буквы (a-z)');
            if (!e.target.value) {
                setPasswordError('Пароль не должен быть пустым')
            }
        }
        else {
            setPasswordError('')
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleClick(email, password)
    }

    return (
        <form className='form'>
            <h1 className='form__title'>{title}</h1>

            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            <input
                type="text"
                name='email'
                className='form__input'
                value={email}
                placeholder='Enter your Email....'
                onBlur={e => blurHandler(e)}
                onChange={e => emailHandler(e)}
            />

            {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
            <input
                type="password"
                name='password'
                className='form__input'
                value={password}
                placeholder='Enter your password....'
                onBlur={e => blurHandler(e)}
                onChange={e => passwordHandler(e)}
            />

            <button
                disabled={!formValid}
                type='submit'
                className='form__button'
                onClick={e => onSubmit(e)}
            >
                {titleButton}
            </button>

            {(title === 'Вход')
                ?
                <div className='form__text'>Нет личного кабинета?
                    <Link to='/registration' style={{ color: 'blue' }}> Зарегистрируйтесь!</Link>
                </div>
                : ''
            }

        </form>
    )
};
export default LoginForm;