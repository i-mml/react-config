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
                {/* <svg className={s.modalIcon} xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 24 24" fill="none">
                    <path d="M11 17C11 17.93 11 18.395 11.1022 18.7765C11.3796 19.8117 12.1883 20.6204 13.2235 20.8978C13.605 21 14.07 21 15 21L16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2L21 7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3L15 3C14.07 3 13.605 3 13.2235 3.10222C12.1883 3.37962 11.3796 4.18827 11.1022 5.22354C11 5.60504 11 6.07003 11 7M7 8L3 12M3 12L7 16M3 12L15 12" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <img
                    src="/images/icons/log-out.svg"
                    alt="log out"
                    className={s.modalIcon}
                />
                <button className={s.btn} onClick={removeToken}>خروج</button>
            </ModalBody>
        </Modal >
    )
}

export default LogoutModal