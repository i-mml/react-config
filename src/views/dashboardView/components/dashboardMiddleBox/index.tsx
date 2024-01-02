import React from 'react'
import s from './style.module.scss';
import NotificationsBox from '../notificationsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MiddleSliderItem from '../middleSliderItem';
import DashboardConnectedDevices from '../dashboardConnectedDevices';
import DashboardCameras from '../dashboardCameras';

const DashboardMiddleBox = ({ data }: any) => {
    console.log(data)
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
                        {
                            data?.bannersList?.length > 0 && data?.bannersList?.map((item: any) => (
                                <SwiperSlide key={item?.id}>
                                    <MiddleSliderItem  {...item} />
                                </SwiperSlide>
                            ))}

                    </Swiper>
                </div>
                <div className={s.smallBoxWrapper}>
                    <div className={s.smallBox}>
                        <DashboardConnectedDevices devices={data?.devicesList} />
                    </div>
                    <div className={s.smallBox}>
                        <DashboardCameras camerasList={data?.camerasList} />
                    </div>
                </div>
            </div >
            <div className={s.notifications}>
                <NotificationsBox notifications={data?.notificationsList?.sensors} />
            </div>
        </div >
    )
}

export default DashboardMiddleBox