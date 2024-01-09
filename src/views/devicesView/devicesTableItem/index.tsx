import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import SensorsModal from '../sensorsModal';

const DeviceTableItem = ({ name, icon, fold, objid }: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <tr className={s.deviceTableItem} key={name}>
            <td>
                <div className={s.name}>
                    <img src={'/images/icons/monitor.svg'} className={s.image} />
                    <span className={s.nameValue}>{name}</span>
                </div>
            </td>
            <td>
                <div className={`${s.statusBox} ${!fold ? s.statusBoxOffline : ""}`}>
                    <div className={s.statusBadge}></div>
                    <div className={s.status}>{fold ? "آنلاین" : "آفلاین"}</div>
                </div>
            </td>
            <td>
                <div className={s.link} onClick={toggle}>
                    سنسور PIR
                </div>
            </td>
            <SensorsModal toggle={toggle} modal={modal} objid={objid} />
        </tr>
    )
}

export default DeviceTableItem