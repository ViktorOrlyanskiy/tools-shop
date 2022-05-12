import React from 'react';
import '../styles/Orders.scss';
import Table from '../components/Table';
import { deleteOrderAction, changeStatusOrderAction } from '../../../store/orderReducer';
import { useDispatch, useSelector } from 'react-redux';
import { reversSort } from '../utils';


export const AdminOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);


    const deleteOrder = (id) => {
        dispatch(deleteOrderAction(id))
    }

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
                        deleteOrder={deleteOrder}
                        changeStatusOrder={changeStatusOrder}
                    />)

                : <div className='cart__empty'>Заказов нет!</div>
            }
        </div>
    )
};
