const defaultState = {
    order: {
        statusOrder: '',
        totalSum: 0,
        goods: [
            // { name: '', price: '', amount: '', sum: '' }
        ]
    }

}


const CREATE_ORDER = 'CREATE_ORDER';
const CHANGE_STATUS_ORDER = 'CHANGE_STATUS_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';

export const orderReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CREATE_ORDER:

            return { ...state, order: action.payload }

        case CHANGE_STATUS_ORDER:

            return { ...state, order: { ...state.order, statusOrder: action.payload } }

        case DELETE_ORDER:

            return {
                ...state,
                order: { goods: [] }
            }


        default:
            return state;
    }

}


export const createOrderAction = (payload) => ({ type: CREATE_ORDER, payload });
export const changeStatusOrderAction = (payload) => ({ type: CHANGE_STATUS_ORDER, payload });
export const deleteOrderAction = () => ({ type: DELETE_ORDER, });