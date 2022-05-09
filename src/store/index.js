import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from './cartReducer';
import { orderReducer } from "./orderReducer";
import { userReducer } from "./userReducer";





const rootReducer = combineReducers({
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())