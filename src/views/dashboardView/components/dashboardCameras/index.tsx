import React from 'react'
import s from './style.module.scss';
import TitleBox from '../titleBox';
import CameraListItem from '../cameraListItem';
import SecondaryButton from '../../../../components/buttons/secondaryButton';
import { useNavigate } from 'react-router-dom';

const DashboardCameras = ({ camerasList = [] }: any) => {
    const navigate = useNavigate()



    return (
        <div className={s.container}>
            <TitleBox title='دوربین ها' icon='/images/icons/camera-list-icon.svg' />
            {
                camerasList?.slice(0, 4)?.map((item: any, index: number) => <CameraListItem key={item.id} title={item.title} external_link={item?.external_link} isLast={index === 3} />)
            }
            <SecondaryButton className={s.showAll} onClick={() => navigate("/cameras")}>
                مشاهده همه دوربین ها
            </SecondaryButton>
        </div>
    )
}

export default DashboardCameras