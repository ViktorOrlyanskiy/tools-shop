import React from 'react';


function TableRow({ cellValues }) {
    return (
        <tr>
            {(cellValues.length > 0)
                ? cellValues.map(value => <td>{value}</td>)
                : ''
            }
        </tr>

    )
};
export default TableRow;