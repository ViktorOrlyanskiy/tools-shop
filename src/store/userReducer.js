const defaultState = {
    user: {
        email: null,
        id: null,
        token: null,
        userName: null,
        role: null,
        isAuth: false,
    }
}

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        case REMOVE_USER:
            return { ...state, user: { isAuth: false } }


        default:
            return state
    }

}

export const setUserAction = (payload) => ({ type: SET_USER, payload })
export const removeUserAction = () => ({ type: REMOVE_USER })