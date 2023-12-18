import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';

const DashboardConnectedDevices = () => {
    return (
        <div className={s.container}>
            <TitleBox title='دستگاه‌های متصل' icon='/images/icons/printer.svg' />
        </div>
    )
}

export default DashboardConnectedDevices