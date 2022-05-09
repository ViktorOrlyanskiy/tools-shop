import React from 'react';
import '../styles/Orders.scss';
import GeneralInfo from '../components/GeneralInfo';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableBody';
import { useSelector } from 'react-redux';

export const CustomerOrders = ({ }) => {

    const order = useSelector(state => state.order.order);


    return (
        <div className='orders'>
            {(order.goods.length > 0)
                ? <div className='orders__table'>
                    <GeneralInfo {...order} />
                    <TableHeader />
                    <TableRow cellValues={order.goods} />
                </div>
                : <div className='cart__empty' >Заказов нет!</div>
            }
        </div>
    )
};
