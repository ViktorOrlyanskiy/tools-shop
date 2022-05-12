import React from 'react';
import '../styles/Table.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import GeneralInfo from './GeneralInfo';



function Table({ deleteOrder, changeStatusOrder, order }) {

    return (
        <div className='table-order'>
            <GeneralInfo
                deleteOrder={deleteOrder}
                changeStatusOrder={changeStatusOrder}
                {...order}
            />
            <TableHeader />
            <TableBody cellValues={order.goods} />
        </div>
    )
}
export default Table;
