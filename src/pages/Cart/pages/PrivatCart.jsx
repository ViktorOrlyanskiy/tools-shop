import React, { useState } from 'react';
import '../styles/Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TableRow from '../components/TableRow';
import TableHeader from '../components/TableHeader';
import { Modal } from '../../../components/UI/Modal/Modal';
import { displayTotalSum } from '../../../helpers';
import { addOrderAction } from '../../../store/orderReducer';
import { getGoods } from '../utils/Cart';
import { deleteCartAction } from '../../../store/cartReducer';



export const PrivatCart = ({ }) => {
    const dispatch = useDispatch();
    const goods = useSelector(state => state.cart.goods);
    const totalSum = useSelector(state => state.cart.options.totalSum);
    const [modalActive, setModalActive] = useState(false);
    const orders = useSelector(state => state.orders.orders)

    const toOrder = () => {

        const order = {
            id: orders.length + 1,
            statusOrder: 'Оплачен',
            totalSum: totalSum,
            goods: getGoods(goods)
        }

        dispatch(addOrderAction(order))
        dispatch(deleteCartAction())
        setModalActive(true)

        // закрывает модальное окно и открывает каталог
        setTimeout(() => {
            setModalActive(false);
        }, 2000);
    }

    return (
        <div className='cart'>
            <div className="cart__body">
                {(goods.length > 0)
                    ? <div className="cart__table">
                        <TableHeader />

                        {goods.map((product, index) => <TableRow key={product.id} {...product} index={++index} />)}

                        <div className="cart__total">
                            <div className="cart__text">Итого к оплате: {displayTotalSum(totalSum)}</div>
                            <div className="cart__button" onClick={toOrder}>Оплатить</div>
                        </div>
                    </div>
                    : <div className='cart__empty' >В корзине ничего нет</div>
                }
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <p className='cart__modal modal__text'>Заказ успешно оплачен! Ожидайте курьера.</p>
                <p className='cart__modal modal__text'>Проверить статус заказа >>>
                    <Link to="/orders" className='cart__modal modal__link'> История заказов</Link>
                </p>
            </Modal>
        </div>
    )
};
