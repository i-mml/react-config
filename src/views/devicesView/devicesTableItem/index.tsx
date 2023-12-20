import React from 'react'
import s from './style.module.scss';
import { Stats } from 'fs';

interface IProps {
    id: number,
    name: string,
    nameEng: string,
    status: string,
    sensorLink: string
}


const DeviceTableItem = ({ name, nameEng, status, sensorLink }: IProps) => {
    return (
        <tr className={s.deviceTableItem}>
            <td>
                <div className={s.name}>
                    <img src={`/images/icons/${nameEng || 'printer'}.svg`} className={s.image} />
                    <span className={s.nameValue}>{name}</span>
                </div>
            </td>
            <td>
                <div className={`${s.statusBox} ${status === "OFFLINE" ? s.statusBoxOffline : ""}`}>
                    <div className={s.statusBadge}></div>
                    <div className={s.status}>{status === "ONLINE" ? "آنلاین" : "آفلاین"}</div>
                </div>
            </td>
            <td>
                <a href={sensorLink} target='blank' >
                    سنسور PIR
                </a>
            </td>
        </tr>
    )
}

export default DeviceTableItem