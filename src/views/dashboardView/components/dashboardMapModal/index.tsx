import React from 'react'
import DashboardMap from '../dashboardMap'
import { Modal, ModalBody } from 'reactstrap';
import s from './style.module.scss';

const DashboardMapModal = ({ planList = [], isOpen, toggle }: any) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            className={s.modalContainer}
            backdrop
            keyboard
        >
            <ModalBody className={s.modalBody}>
                <DashboardMap planList={planList} isModal />
            </ModalBody>
        </Modal>
    )
}

export default DashboardMapModal