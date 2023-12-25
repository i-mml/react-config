import React from 'react'
import s from './style.module.scss';

const StatusBox = ({ active = false, title = "" }) => {
    return (
        <div className={`${s.statusBox} ${!active ? s.statusBoxOffline : ""}`}>
            <div className={s.statusBadge}></div>
            <div className={s.status}>{title}</div>
        </div>
    )
}

export default StatusBox