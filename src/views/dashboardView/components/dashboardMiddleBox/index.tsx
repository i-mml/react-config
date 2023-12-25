import React from 'react'
import s from './style.module.scss';
import NotificationsBox from '../notificationsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MiddleSliderItem from '../middleSliderItem';
import DashboardConnectedDevices from '../dashboardConnectedDevices';
import DashboardCameras from '../dashboardCameras';

const DashboardMiddleBox = ({ data }: any) => {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.middleSlider}>
                    <Swiper
                        slidesPerView={1}
                        pagination={true}
                        modules={[Pagination]}
                        className={s.slider}
                    >
                        <SwiperSlide>
                            <MiddleSliderItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MiddleSliderItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MiddleSliderItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={s.smallBoxWrapper}>
                    <div className={s.smallBox}>
                        <DashboardConnectedDevices />
                    </div>
                    <div className={s.smallBox}>
                        <DashboardCameras camerasList={data?.camerasList} />
                    </div>
                </div>
            </div >
            <div className={s.notifications}>
                <NotificationsBox />
            </div>
        </div >
    )
}

export default DashboardMiddleBox