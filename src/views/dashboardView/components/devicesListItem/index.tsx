import React from 'react'
import s from './style.module.scss';


const DeviceListItem = ({ name = "", isLast = false, status = false, icon = "" }) => {

    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`}>
            <img src={process.env.REACT_APP_IMAGE_BASE_URL + icon || '/images/icons/printer.svg'} className={s.image} />
            <div className={s.title}>{name}</div>

            <div className={`${s.statusBox} ${!status ? s.statusBoxOffline : ""}`}>
                <div className={s.statusBadge}></div>
                <div className={s.status}>{status ? "آنلاین" : "آفلاین"}</div>
            </div>
        </div>
    )
}

export default DeviceListItem