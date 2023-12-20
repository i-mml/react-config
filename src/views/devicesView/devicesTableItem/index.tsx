import React, { useState } from 'react'
import s from './style.module.scss';
import { Stats } from 'fs';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ModalTitle } from 'react-bootstrap';
import ModalHeaderTitle from '../../../components/modalTitle';

interface IProps {
    id: number,
    name: string,
    nameEng: string,
    status: string,
    sensorLink: string
}


const DeviceTableItem = ({ name, nameEng, status, sensorLink }: IProps) => {
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const [keyboard, setKeyboard] = useState(true);

    const toggle = () => setModal(!modal);

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
                <div className={s.link} onClick={toggle}>
                    سنسور PIR
                </div>
            </td>
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={s.modal}
                backdrop={backdrop}
                keyboard={keyboard}
            >
                <ModalBody>
                    <ModalHeaderTitle title='سنسورها' handleClose={toggle} />
                    fasfsdf
                </ModalBody>
            </Modal>
        </tr>
    )
}

export default DeviceTableItem