import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import TitleBox from '../titleBox';
import MapDeviceIcon from '../../../../components/mapDeviceIcon';

const DashboardMap = ({ planList = [] }: any) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className={s.dashboardMapContainer}>
            <TitleBox title='نقشه' icon='/images/icons/blackMap.svg' />

            <div className={s.sliderBox}>
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => { }}
                    onSwiper={(swiper: any) => { }}
                    pagination={pagination}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                >
                    {planList?.map((item: any) =>
                        <SwiperSlide key={item?.ID}>
                            <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item?.plan?.image}`} className={s.image} />
                            <div className={s.devicesListWrapper}>
                                {
                                    item?.devices?.map((node: any) =>
                                        <MapDeviceIcon key={node?.ID} style={{ bottom: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                                    )
                                }
                                {/* <MapDeviceIcon style={{ bottom: "71%", left: "31%" }} />
                                <MapDeviceIcon style={{ bottom: "71%", left: "85%" }} /> */}
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default DashboardMap