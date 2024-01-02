import React from 'react'
import s from './style.module.scss';


const DeviceListItem = ({ name = "", isLast = false, status = false, icon = "" }) => {

    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`}>
            <img src={'/images/icons/monitor.svg'} className={s.image} />
            <div className={s.title}>{name}</div>

            <div className={`${s.statusBox} ${!status ? s.statusBoxOffline : ""}`}>
                <div className={s.statusBadge}></div>
                <div className={s.status}>{status ? "آنلاین" : "آفلاین"}</div>
            </div>
        </div>
    )
}

export default DeviceListItem