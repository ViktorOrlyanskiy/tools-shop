import React from 'react';
import '../styles/TableHeader.scss';

function TableHeader() {
    return (
        <div className="table__header row-header">
            <div className="row-header__name">Наименование</div>
            <div className="row-header__price">Цена</div>
            <div className="row-header__amount">Количество</div>
            <div className="row-header__sum">Сумма</div>
        </div>
    )
};
export default TableHeader;