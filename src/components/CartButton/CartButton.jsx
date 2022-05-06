import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SvgGeneration } from '../UI/SvgGeneration/SvgGeneration';
import { displayTotalSum } from '../../helpers';
import './CartButton.scss';

function CartButton({ }) {

    const options = useSelector(state => state.cart.options)
    console.log(options);
    return (
        <div className='header-btn__cart '>
            <Link to='cart' className='cart-btn'>
                <div className='cart-btn__icon'>
                    <SvgGeneration id={'cart-arrow-down'} />
                </div>
                <div className='cart-btn__total'>{displayTotalSum(options.totalSum)}</div>
            </Link>
        </div>
    )
};
export default CartButton;