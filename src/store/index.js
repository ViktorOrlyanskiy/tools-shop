import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from './cartReducer';
import { orderReducer } from "./orderReducer";





const rootReducer = combineReducers({
    cart: cartReducer,
    order: orderReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())