import React from 'react';
import TableRow from './TableRow';


function TableBody({ cellValues }) {
    return (
        <div className='table-order__body'>
            {(cellValues.length > 0)
                ? cellValues.map((product, index) =>
                    <TableRow key={product.name} index={++index} {...product} />
                )
                : ''

            }
        </div>

    )
};
export default TableBody;