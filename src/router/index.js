import { Registration } from '../pages/Login/index';
import { Login } from '../pages/Login/index';
import { Catalog } from '../pages/Catalog/index';
import { PrivatCart } from '../pages/Cart/index';
import { PublicCart } from '../pages/Cart/index';
import { CustomerOrders } from '../pages/Orders/index';
import { ModeratorOrders } from '../pages/Orders/index';
import { AdminOrders } from '../pages/Orders/index';
import { Error } from '../pages/Error/index';



export const publicRoutes = [
    { path: '/', element: <Catalog />, exact: true },
    { path: '/catalog', element: <Catalog />, exact: true },
    { path: '/cart', element: <PublicCart />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/registration', element: <Registration />, exact: true },
    { path: '/*', element: <Error />, exact: true },

];

export const customerRoutes = [
    { path: '/', element: <Catalog />, exact: true },
    { path: '/catalog', element: <Catalog />, exact: true },
    { path: '/cart', element: <PrivatCart />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/registration', element: <Registration />, exact: true },
    { path: '/orders', element: <CustomerOrders />, exact: true },
    { path: '/*', element: <Error />, exact: true },

];

export const moderatorRoutes = [
    { path: '/', element: <Catalog />, exact: true },
    { path: '/catalog', element: <Catalog />, exact: true },
    { path: '/cart', element: <PrivatCart />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/registration', element: <Registration />, exact: true },
    { path: '/orders', element: <ModeratorOrders />, exact: true },
    { path: '/*', element: <Error />, exact: true },

];

export const adminRoutes = [
    { path: '/', element: <Catalog />, exact: true },
    { path: '/catalog', element: <Catalog />, exact: true },
    { path: '/cart', element: <PrivatCart />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/registration', element: <Registration />, exact: true },
    { path: '/orders', element: <AdminOrders />, exact: true },
    { path: '/*', element: <Error />, exact: true },

];