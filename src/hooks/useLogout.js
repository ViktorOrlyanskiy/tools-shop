import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { removeUserAction } from '../store/userReducer';
import { clearOrdersAction } from '../store/orderReducer';
import { useNavigate } from 'react-router-dom';


export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    // обработка разлогинивания
    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                dispatch(removeUserAction())
                dispatch(clearOrdersAction())
                localStorage.clear()
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return handleLogout
}