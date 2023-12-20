import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import CameraListItem from '../cameraListItem';
import SecondaryButton from '../../../../components/buttons/secondaryButton';
import { useNavigate } from 'react-router-dom';

const DashboardCameras = () => {
    const navigate = useNavigate()

    const camerasList = [
        {
            id: 1,
            title: "دوربین شماره یک"
        },
        {
            id: 2,
            title: "دوربین شماره دو"
        },
        {
            id: 3,
            title: "دوربین شماره سه"
        },
        {
            id: 4,
            title: "دوربین شماره چهار"
        },
        {
            id: 5,
            title: "دوربین شماره پنج"
        },
    ]
    return (
        <div className={s.container}>
            <TitleBox title='دوربین ها' icon='/images/icons/webcam.svg' />
            {
                camerasList?.slice(0, 4)?.map((item, index) => <CameraListItem key={item.id} title={item.title} isLast={index === 3} />)
            }
            <SecondaryButton className={s.showAll} onClick={() => navigate("/cameras")}>
                مشاهده همه دوربین ها
            </SecondaryButton>
        </div>
    )
}

export default DashboardCameras