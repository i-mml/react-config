import React, { useState } from 'react'
import s from './style.module.scss';
import { Stats } from 'fs';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ModalTitle } from 'react-bootstrap';
import ModalHeaderTitle from '../../../components/modalTitle';
import { Link } from 'react-router-dom';



const DeviceTableItem = ({ name, icon, fold }: any) => {
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const [keyboard, setKeyboard] = useState(true);

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
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={s.modalContainer}
                backdrop={backdrop}
                keyboard={keyboard}
            >
                <ModalBody className={s.modalBody}>
                    <ModalHeaderTitle title='سنسورها' handleClose={toggle} />
                    <div className={s.sensorsList}>
                        <div className={s.listHeader}>
                            <span>عنوان</span>
                            <span>مقدار</span>
                        </div>
                        <div className={s.listItem}>
                            <span>سنسورP</span>
                            <span>23145</span>
                        </div>
                        <div className={s.listItem}>
                            <span>سنسورP</span>
                            <span>23145</span>
                        </div>
                        <div className={s.listItem}>
                            <span>سنسورP</span>
                            <span>23145</span>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </tr>
    )
}

export default DeviceTableItem