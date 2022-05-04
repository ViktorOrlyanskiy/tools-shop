import { Login } from '../pages/Login/index';
import { Catalog } from '../pages/Catalog/index';
import { Cart } from '../pages/Cart/index';
import { Orders } from '../pages/Orders/index';
import { Error } from '../pages/Error/index';



export const privateRoutes = [
    { path: '/', element: <Login />, exact: true },
    { path: '/catalog', element: <Catalog />, exact: true },
    { path: '/cart', element: <Cart />, exact: true },
    { path: '/orders', element: <Orders />, exact: true },
    { path: '/*', element: <Error />, exact: true },

];