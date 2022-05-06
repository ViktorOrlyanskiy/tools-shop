import React from 'react';
import Product from './Product'
import '../styles/Catalog.scss';

export const Catalog = () => {

    const listProduct = [
        { id: 1001, name: 'Компрессор', price: '12 900 руб', img: 'img1' },
        { id: 1002, name: 'Дрель', price: '4 200 руб', img: 'img2' },
        { id: 1003, name: 'Лобик', price: '8 200 руб', img: 'img5' },
        { id: 1004, name: 'Циркулярная пила', price: '4 500 руб', img: 'img3' },
        { id: 1005, name: 'Болгарка', price: '6 900 руб', img: 'img4' },
        { id: 1006, name: 'Шлифмашина', price: '12 900 руб', img: 'img6' },
        { id: 1007, name: 'Генератор', price: '4 200 руб', img: 'img7' },
        { id: 1008, name: 'Отбойный молоток', price: '8 200 руб', img: 'img8' },
        { id: 1009, name: 'Шуруповерт', price: '4 500 руб', img: 'img9' },
        { id: 1010, name: 'Степлер', price: '6 900 руб', img: 'img10' },
    ]

    return (
        <div className='catalog'>
            <h2 className='catalog__title'>Все товары</h2>
            <div className="catalog__body">
                {(listProduct.length > 0)
                    ? listProduct.map(product => < Product key={product.name} {...product} />)
                    : ''
                }
            </div>
        </div>
    )
};