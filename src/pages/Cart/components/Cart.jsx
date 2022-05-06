import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { displayTotalSum } from '../../../helpers';
import '../styles/Cart.scss';
import { addOrderAction } from '../../../store/orderReducer';
import { getGoods } from '../utils/Cart';
import { deleteCartAction } from '../../../store/cartReducer';


export const Cart = ({ }) => {
    const dispatch = useDispatch();
    const goods = useSelector(state => state.cart.goods)
    const totalSum = useSelector(state => state.cart.options.totalSum)

    const toOrder = () => {

        const order = {
            loginUser: 'guest',
            status: 'no pain',
            totalSum: totalSum,
            goods: getGoods(goods)
        }

        dispatch(addOrderAction(order))
        dispatch(deleteCartAction())
    }

    return (
        <div className='cart'>
            <div className="cart__body">
                {(goods.length > 0)
                    ? <div className="cart__table">
                        <TableHeader />
                        {goods.map(product => <TableRow key={product.id} {...product} />)}

                        <div className="cart__total">
                            <div className="cart__text">Итого к оплате: {displayTotalSum(totalSum)}</div>
                            <div className="cart__button" onClick={toOrder}>Оформить заказ</div>
                        </div>
                    </div>
                    : <div className='cart__empty' >В корзине ничего нет</div>

                }

            </div>

        </div>
    )
};
