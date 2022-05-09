import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { removeUserAction } from '../store/userReducer';


export const useLogout = () => {
    const dispatch = useDispatch();

    // обработка разлогинивания
    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                dispatch(removeUserAction())
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return handleLogout
}