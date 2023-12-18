import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import CameraListItem from '../cameraListItem';

const DashboardCameras = () => {
    return (
        <div className={s.container}>
            <TitleBox title='دوربین ها' icon='/images/icons/webcam.svg' />
            <CameraListItem />
        </div>
    )
}

export default DashboardCameras