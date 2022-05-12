import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserAction } from '../store/userReducer';
import { getRole, getStatusAuth } from '../pages/Login/utils/Login';

export const useLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const parseUser = (user) => {
        return {
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            role: getRole(user.email),
            isAuth: getStatusAuth(user.accessToken)
        }
    }


    const saveUserInLocalStorage = (user) => {
        localStorage.setItem('email', user.email);
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('token', user.accessToken);
    }


    // обработка входа
    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUserAction(parseUser(user)))
                saveUserInLocalStorage(user)
                navigate('/catalog');
            })
            .catch(() => { alert('Email или пароль не действительны!') });
    }


    // обработка регистрации
    const handleRegistration = (email, password) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUserAction(parseUser(user)))
                navigate('/catalog');
            })
            .catch(() => { alert('Email или пароль не действительны!') });
    }


    return { handleLogin, handleRegistration };
}