import React from 'react';
import '../styles/Orders.scss';
import Table from '../components/Table';
import { changeStatusOrderAction } from '../../../store/orderReducer';
import { useDispatch, useSelector } from 'react-redux';
import { reversSort } from '../utils';




export const ModeratorOrders = ({ }) => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    const changeStatusOrder = (payload) => {
        dispatch(changeStatusOrderAction(payload))
    }


    return (
        <div className='orders'>
            {(reversSort(orders).length > 0)

                ? orders.map(order =>
                    <Table
                        key={order.id}
                        order={order}
                        changeStatusOrder={changeStatusOrder}
                    />)

                : <div className='cart__empty'>Заказов нет!</div>
            }
        </div>
    )
};
