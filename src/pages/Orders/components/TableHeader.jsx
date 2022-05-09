import React from 'react';
import '../styles/TableHeader.scss';

function TableHeader() {

    const cellHeaders = ['№', 'Наименование', 'Цена', 'Количество', 'Сумма'];


    return (
        <div className="table-order__header">
            {cellHeaders.map(value => <div className="table-order__cell" key={value}>{value}</div>
            )}
        </div>
    )
};
export default TableHeader;