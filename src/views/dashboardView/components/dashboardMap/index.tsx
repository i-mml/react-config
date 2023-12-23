import React from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import TitleBox from '../titleBox';

const DashboardMap = () => {
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    pagination={pagination}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <img src='/images/rooms.png' className={s.image} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' className={s.image} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' className={s.image} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='/images/rooms.png' className={s.image} />
                    </SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default DashboardMap