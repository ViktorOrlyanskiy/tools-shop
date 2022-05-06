import React from 'react';


function TableHeader(cellHeaders) {
    return (
        <thead><tr>{(cellHeaders.length > 0)
            ? cellHeaders.map(header => <th key={header}>{header}</th>)
            : ''}</tr></thead>

    )
};
export default TableHeader;