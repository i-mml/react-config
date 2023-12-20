import React from 'react'
import s from './style.module.scss';
import TitleBox from '../../views/dashboardView/components/titleBox';

const ModalHeaderTitle = ({ title = '', handleClose }: { title: string, handleClose: () => void }) => {
    return (
        <div className={s.modalTitle}>
            <TitleBox title={title} />
            <button className={s.button} onClick={handleClose}>
                <img src='/images/icons/x-circle.svg' className={s.icon} />
            </button>
        </div>
    )
}

export default ModalHeaderTitle