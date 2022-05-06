import React, { useState } from 'react';
import { GetImg } from '../../../utils/GetImg';
import '../styles/Product.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction, increaseAmountProductAction, updateTotalSumAction } from '../../../store/cartReducer';
import { checkItemsInCart, displayAmount, getTotalSum } from '../utils/Product';


function Product({ id, name, price, img, }) {

    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch();
    const goods = useSelector(state => state.cart.goods);


    const addCart = () => {
        let temp = amount;
        setAmount(++temp);

        const product = {
            id,
            name,
            img,
            price: +(price.replace(/\D/g, '')),
            amount: 1,
            sum: +(price.replace(/\D/g, '')),
        };

        if (checkItemsInCart(id, goods)) {
            dispatch(increaseAmountProductAction(id))
        }
        else {
            dispatch(addProductAction(product))
        }

        dispatch(updateTotalSumAction())
    }



    return (
        <div className='product'>
            <div className="product__img">
                {<GetImg id={img} />}
            </div>
            <div className="product__title">{name}</div>
            <div className="product__row">
                <div className="product__price">{price}</div>
                <div className="product__amount">{displayAmount(amount)}</div>
            </div>
            <button className="product__button" onClick={addCart}>В корзину</button>
        </div>
    )
};
export default Product;