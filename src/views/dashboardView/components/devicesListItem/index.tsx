import React from 'react'
import s from './style.module.scss';


const DeviceListItem = ({ name = "", isLast = false, status = "" }) => {
    console.log(status)
    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`}>
            <img src='/images/icons/printer.svg' className={s.image} />
            <div className={s.title}>{name}</div>

            <div className={`${s.statusBox} ${status === "offline" ? s.statusBoxOffline : ""}`}>
                <div className={s.statusBadge}></div>
                <div className={s.status}>{status === "online" ? "آنلاین" : "آفلاین"}</div>
            </div>
        </div>
    )
}

export default DeviceListItem