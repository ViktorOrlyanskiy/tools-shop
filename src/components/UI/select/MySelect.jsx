import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MySelect.scss';

const MySelect = ({ current, options, changeValue }) => {

    const [active, setActive] = useState(false);
    const [currentValue, setCurrentValue] = useState(current);


    const changeCurrentValue = (event) => {
        setCurrentValue(event.target.dataset.value);
        changeValue(event.target.dataset.value)
        setActive(false);
    };

    return (
        <div className={active ? `mySelect active` : `mySelect`}>
            <div className="mySelect__header" onClick={() => setActive(true)}>
                <span className="mySelect__current" data-value={currentValue}>{currentValue}</span>
                <div className="mySelect__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                </div>
            </div>

            {(options.length > 0)
                ? <div className="mySelect__body">
                    {options.map(option =>
                        <div
                            className="mySelect__item"
                            key={option.value}
                            onClick={(event) => changeCurrentValue(event)}
                            data-value={option.value}
                        >
                            {option.text}
                        </div>
                    )}
                </div>
                : ''
            }
        </div>
    )
};
export default MySelect; 