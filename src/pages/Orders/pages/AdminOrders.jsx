import React from 'react';
import '../styles/Orders.scss';
import GeneralInfo from '../components/GeneralInfo';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableBody';
import { deleteOrderAction, changeStatusOrderAction } from '../../../store/orderReducer';
import { useDispatch, useSelector } from 'react-redux';

export const AdminOrders = ({ }) => {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order.order);


    const deleteOrder = () => {
        dispatch(deleteOrderAction())
    }

    const changeStatusOrder = (payload) => {
        dispatch(changeStatusOrderAction(payload))
    }


    return (
        <div className='orders'>
            {(order.goods.length > 0)
                ? <div className='orders__table'>
                    <GeneralInfo
                        deleteOrder={deleteOrder}
                        changeStatusOrder={changeStatusOrder}
                        {...order}
                    />
                    <TableHeader />
                    <TableRow cellValues={order.goods} />
                </div>
                : <div className='cart__empty'>Заказов нет!</div>
            }
        </div>
    )
};
