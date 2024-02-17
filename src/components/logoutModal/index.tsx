import React from 'react'
import { Modal, ModalBody } from 'reactstrap';
import s from './style.module.scss';
import ModalHeaderTitle from '../modalTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { LogoutService } from '../../api/services/auth';

const LogoutModal = ({ open, toggle }: { open: boolean, toggle: any }) => {
    const navigate = useNavigate()
    const mutation = useMutation(() => LogoutService().finally(() => navigate("/login", { replace: true })));

    const removeToken = () => {
        mutation.mutate();
    }
    return (
        <Modal
            isOpen={open}
            toggle={toggle}
            className={s.modalContainer}
            backdrop
            keyboard
        >
            <ModalBody className={s.modalBody}>
                <ModalHeaderTitle title='خروج از حساب' handleClose={toggle} />
                <p className={s.promptStyle}>می‌خواهید از حساب کاربری خود خارج شوید؟</p>

                <button className={s.btn} onClick={removeToken}>خروج</button>
            </ModalBody>
        </Modal >
    )
}

export default LogoutModal