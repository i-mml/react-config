import React from 'react'
import s from './style.module.scss';
import moment from 'moment-jalaali';

const FinancialManagementHeader = ({ title = "" }) => {
    const nowD = moment().format('jDD jMMM jYYYY (DD MMM YYYY)')

    return (
        <div className={s.header}>
            <div className={s.title}>{title}</div>

            <div className={s.date}>
                تاریخ امروز : {nowD}

            </div>
        </div>

    )
}

export default FinancialManagementHeader