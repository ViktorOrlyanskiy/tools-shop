import React, { useEffect, useState } from 'react';
import { displayTotalSum } from '../../../helpers/index';
import MySelect from '../../../components/UI/select/MySelect';
import '../styles/GeneralInfo.scss';
import { useSelector } from 'react-redux';



function GeneralInfo({ id, totalSum, statusOrder, deleteOrder, changeStatusOrder }) {

    const [selectValue, setSelectValue] = useState(statusOrder);
    const user = useSelector(state => state.user.user)
    const options = [
        { value: 'Оплачен', text: 'Оплачен' },
        { value: 'Не оплачен', text: 'Не оплачен' },
        { value: 'Отменен', text: 'Отменен' },
    ]


    const changeSelectValue = (value) => {
        setSelectValue(value)
    };

    useEffect(() => {
        if (changeStatusOrder !== undefined) {
            changeStatusOrder({ id, status: selectValue })
        }
    }, [selectValue])


    return (
        <div className="table-order__info info-order">
            <div className="info-order__column info-order__column_left">
                <div className="info-order__row">
                    <div className="info-order__cell">Номер заказа:</div>
                    <div className="info-order__cell">{id}</div>
                </div>
                <div className="info-order__row">
                    <div className="info-order__cell">Имя клиента:</div>
                    <div className="info-order__cell">{user.email}</div>
                </div>
                <div className="info-order__row">
                    <div className="info-order__cell">Сумма заказа:</div>
                    <div className="info-order__cell">{displayTotalSum(totalSum)}</div>
                </div>
            </div>


            <div className="info-order__column info-order__column_right">
                <div className="info-order__row">
                    <div className="info-order__cell info-order__cell_right">Статус:</div>
                    <div className="info-order__cell">
                        {(changeStatusOrder !== undefined)
                            ? <MySelect options={options} changeValue={changeSelectValue} current={statusOrder} />
                            : <p>{statusOrder}</p>
                        }
                    </div>
                </div>

                {(deleteOrder !== undefined)
                    ? <div className="info-order__row">
                        <button className='info-order__button' onClick={() => deleteOrder(id)}>Удалить заказ</button>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
};
export default GeneralInfo;