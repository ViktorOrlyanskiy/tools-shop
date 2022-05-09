import React, { useState } from 'react';
import '../styles/Cart.scss';
import { useSelector } from 'react-redux';
import TableRow from '../components/TableRow';
import TableHeader from '../components/TableHeader';
import { Modal } from '../../../components/UI/Modal/Modal';
import { displayTotalSum } from '../../../helpers';
import { useNavigate } from 'react-router-dom';




export const PublicCart = ({ }) => {
    const goods = useSelector(state => state.cart.goods);
    const totalSum = useSelector(state => state.cart.options.totalSum);
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();

    const toOrder = () => {

        setModalActive(true)

        // закрывает модальное окно и открывает страницу регистрации
        setTimeout(() => {
            setModalActive(false);
            navigate('/login')
        }, 2500);
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
                <p className='cart__modal modal__text'>Для оплаты небходимо войти в личный кабинет!</p>
            </Modal>
        </div>
    )
};
