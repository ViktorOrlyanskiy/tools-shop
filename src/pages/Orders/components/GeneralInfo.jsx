import React, { useEffect, useState } from 'react';
import { displayTotalSum } from '../../../helpers/index';
import MySelect from '../../../components/UI/select/MySelect';
import '../styles/GeneralInfo.scss';
import { useSelector } from 'react-redux';



function GeneralInfo({ totalSum, statusOrder, deleteOrder, changeStatusOrder }) {

    const [selectValue, setSelectValue] = useState(statusOrder);
    const user = useSelector(state => state.user.user)
    const options = [
        { value: 'Оплачен', text: 'Оплачен' },
        { value: 'Не оплачен', text: 'Не оплачен' },
    ]

    const changeSelectValue = (value) => {
        setSelectValue(value)
    };

    useEffect(() => {
        if (changeStatusOrder !== undefined) {
            changeStatusOrder(selectValue)
        }
    }, [selectValue])


    return (
        <div className="table-order__info info-order">
            <div className="info-order__row">
                <div className="info-order__cell">Пользователь:</div>
                <div className="info-order__cell">{user.email}</div>
            </div>
            <div className="info-order__row">
                <div className="info-order__cell">Сумма заказа:</div>
                <div className="info-order__cell">{displayTotalSum(totalSum)}</div>
            </div>



            <div className="info-order__row">
                <div className="info-order__cell">Статус:</div>
                <div className="info-order__cell">
                    {(changeStatusOrder !== undefined)
                        ? <MySelect options={options} changeValue={changeSelectValue} />
                        : <p>{statusOrder}</p>
                    }
                </div>
            </div>

            {(deleteOrder !== undefined)
                ? <div className="info-order__row">
                    <button className='info-order__button' onClick={deleteOrder}>Удалить заказ</button>
                </div>
                : ''
            }


        </div>
    )
};
export default GeneralInfo;