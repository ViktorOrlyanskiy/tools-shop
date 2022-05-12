import React from 'react';
import '../styles/Orders.scss';
import Table from '../components/Table';
import { useSelector } from 'react-redux';
import { reversSort } from '../utils';



export const CustomerOrders = ({ }) => {

    const orders = useSelector(state => state.orders.orders);


    return (
        <div className='orders'>
            {(reversSort(orders).length > 0)

                ? orders.map(order =>
                    <Table
                        key={order.id}
                        order={order}
                    />)

                : <div className='cart__empty'>Заказов нет!</div>
            }
        </div>
    )
};
