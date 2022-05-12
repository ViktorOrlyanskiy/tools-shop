const defaultState = {
    orders: [
        // {
        //     id: 0,
        //     statusOrder: '',
        //     totalSum: 0,
        //     goods: [
        //         { name: '', price: '', amount: '', sum: '' }
        //     ]
        // }
    ]

}


const ADD_ORDER = 'ADD_ORDER';
const CHANGE_STATUS_ORDER = 'CHANGE_STATUS_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';
const CLEAR_ORDERS = 'CLEAR_ORDERS';

export const orderReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_ORDER:

            return { ...state, orders: [...state.orders, action.payload] }

        case CHANGE_STATUS_ORDER:

            return { ...state, orders: changeStatusOrder(state.orders, action.payload) }

        case DELETE_ORDER:

            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload)
            }

        case CLEAR_ORDERS:

            return {
                ...state,
                orders: []
            }

        default:
            return state;
    }

}


export const addOrderAction = (payload) => ({ type: ADD_ORDER, payload });
export const changeStatusOrderAction = (payload) => ({ type: CHANGE_STATUS_ORDER, payload });
export const deleteOrderAction = (payload) => ({ type: DELETE_ORDER, payload });
export const clearOrdersAction = () => ({ type: CLEAR_ORDERS });


function changeStatusOrder(orders, payload) {
    let newArray = [];

    for (const order of orders) {
        if (order.id === payload.id) {
            order.statusOrder = payload.status;
        }
        newArray.push(order)
    }
    return newArray
}