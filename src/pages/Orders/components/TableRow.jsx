import React from 'react';
import '../styles/TableRow.scss';
import { displayTotalSum } from '../../../helpers/index';
function TableRow({ index = 1, name, price, amount, sum }) {

    return (
        <div className='table-order__row'>
            <div className='table-order__cell'>{index}</div>
            <div className='table-order__cell name'>{name}</div >
            <div className='table-order__cell'>{displayTotalSum(price)}</div>
            <div className='table-order__cell'>{amount} шт</div>
            <div className='table-order__cell'>{displayTotalSum(sum)}</div>
        </div >
    )
};
export default TableRow;