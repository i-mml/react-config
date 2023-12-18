import React from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const DashboardMap = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className={s.dashboardMapContainer}>
            <div className={s.mapTitleBox}>
                <img src='/images/icons/blackMap.svg' className={s.mapIcon} />
                <h4 className={s.mapTitle}>
                    نقشه
                </h4>
            </div>

            <div className={s.sliderBox}>
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    pagination={pagination}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <img src='/images/rooms.png' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' />
                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default DashboardMap