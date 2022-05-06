const defaultState = {

    options: {
        totalSum: 0,
    },
    goods: [
        // { nameProduct: '', price: 0, amount: 0, sum: 0, },
    ],
}


const ADD_PRODUCT = 'ADD_PRODUCT';
const INCREASE_AMOUNT_PRODUCT = 'INCREASE_AMOUNT_PRODUCT';

const UPDATE_TOTAL_SUM = 'UPDATE_TOTAL_SUM';
const DELETE_CART = 'DELETE_CART';


export const cartReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_PRODUCT:

            return {
                ...state,
                goods: [...state.goods, action.payload],
            };

        case INCREASE_AMOUNT_PRODUCT:

            return {
                ...state,
                goods: increaseAmount(state.goods, action.payload),
            };

        case UPDATE_TOTAL_SUM:

            return {
                ...state,
                options: updateTotalSum(state.goods, state.options),
            };

        case DELETE_CART:

            return {
                ...state,
                goods: [],
                options: { totalSum: 0 },
            };


        default:
            return state;
    }
}


export const addProductAction = (payload) => ({ type: ADD_PRODUCT, payload });
export const increaseAmountProductAction = (payload) => ({ type: INCREASE_AMOUNT_PRODUCT, payload });
export const updateTotalSumAction = () => ({ type: UPDATE_TOTAL_SUM, });
export const deleteCartAction = () => ({ type: DELETE_CART, });


// увеличивает количество товаров одного артикула
function increaseAmount(goods, id) {
    const newGoods = [];
    goods.forEach(product => {
        if (product.id === id) {
            product.amount++;
        }
        product.sum = product.amount * product.price;

        newGoods.push(product)
    })
    return newGoods;
}

// обновляет итоговую сумму
function updateTotalSum(goods, options) {
    const newOptions = {};
    for (let key in options) {
        if (key === 'totalSum') {
            newOptions[key] = goods.reduce((sum, current) => sum + current.sum, 0);
        }
        else {
            newOptions[key] = options[key];
        }
    }
    return newOptions;
}