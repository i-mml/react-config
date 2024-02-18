import React from 'react'
import s from './style.module.scss';
import { iconsTranslation } from '../../../../components/icons/iconsTranslation';
import MonitorIcon from '../../../../components/icons/Monitor';


const DeviceListItem = ({
    name = "", isLast = false, status = "", group = "", icon = '' }) => {

    return (
        <div className={`${s.container} ${isLast ? s.isLast : ""}`} >
            {iconsTranslation[group] || <MonitorIcon />}
            < div className={s.title} > {name}</div>

            <div className={`${s.statusBox} ${status === "UP" ? s.statusBoxOffline : ""}`}>
                <div className={s.statusBadge}></div>
                <div className={s.status}>{status !== "UP" ? "آنلاین" : "آفلاین"}</div>
            </div>
        </div >
    )
}

export default DeviceListItem