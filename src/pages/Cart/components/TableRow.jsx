import React from 'react';
import { GetImg } from '../../../utils/GetImg';
import { displayTotalSum } from '../../../helpers';
import '../styles/TableRow.scss';

function TableRow(props) {
    return (
        <div className="table__row row">
            <div className="row__index">{props.index}</div>
            <div className="row__image">{<GetImg id={props.img} />}</div>
            <div className="row__name">{props.name}</div>
            <div className="row__price">{displayTotalSum(props.price)}</div>
            <div className="row__amount">{props.amount}</div>
            <div className="row__sum">{displayTotalSum(props.sum)}</div>
        </div>
    )
};
export default TableRow;