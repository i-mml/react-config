import React from 'react'
import s from './style.module.scss';

const FinancialManagementHeader = ({ title = "" }) => {
    return (
        <div className={s.header}>
            <div className={s.title}>{title}</div>
            <div className={s.date}>تاریخ امروز: 25 شهریور 1402(02 اکتبر 2023)</div>
        </div>

    )
}

export default FinancialManagementHeader