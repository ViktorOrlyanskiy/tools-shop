import React from 'react';
import '../styles/Orders.scss';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export const Orders = ({ }) => {

    const cellHeaders = ['№', 'Наименование', 'Цена', 'Количество', 'Сумма']

    return (
        <div className='orders'>
            <table className='table-order'>
                <TableHeader cellHeaders={cellHeaders} />
                <TableRow />
            </table>
        </div>
    )
};
