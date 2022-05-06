const defaultState = {
    order: {
        loginUser: '',
        statusOrder: '',
        totalSum: 0,
        goods: [
            { name: '', amount: '', sum: '' }
        ]
    }

}


const CREATE_ORDER = 'CREATE_ORDER';

export const orderReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CREATE_ORDER:

            return { ...state, order: action.payload }

        default:
            return state;
    }

}


export const addOrderAction = (payload) => ({ type: CREATE_ORDER, payload });