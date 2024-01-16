import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import SensorsModal from '../sensorsModal';
import SystemInformationModal from '../systemInformationModal';

const DeviceTableItem = ({ name, icon, fold, objid }: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [systemInfoModal, setSystemInfoModal] = useState(false);
    const systemToggle = () => setSystemInfoModal(!systemInfoModal);
    const [selectedSystem, setSelectedSystem] = useState({ title: "", value: "" })

    const systemTypesList = [
        { title: "Hardware", value: "hard_ware" }, { title: "System", value: "system" }, { title: "Users", value: "users" }, { title: "Software", value: "soft_ware" }, { title: "Services", value: "services" }, { title: "Processes", value: "processes" }
    ]

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
            <td className={s.hideMobile}>
                <div className={s.systemInfoList}>
                    {systemTypesList?.map(item => (
                        <span onClick={() => { setSelectedSystem(item); systemToggle() }}>{item.title}</span>
                    ))}
                </div>
            </td>
            {modal &&
                <SensorsModal toggle={toggle} modal={modal} objid={objid} />
            }
            {
                systemInfoModal &&
                <SystemInformationModal toggle={systemToggle} modal={systemInfoModal} objid={objid} systemType={selectedSystem} />
            }

        </tr>
    )
}

export default DeviceTableItem