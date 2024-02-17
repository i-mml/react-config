import React from 'react'
import s from './style.module.scss';

const StatusBox = ({ active = false, title = "", erorr = false }) => {
    return (
        <div className={`${s.statusBox} ${!active ? s.statusBoxOffline : ""}  ${erorr ? s.statusBoxError : ""} `}>
            <div className={s.statusBadge}></div>
            <div className={s.status}>{title}</div>
        </div>
    )
}

export default StatusBox