import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleBox from '../titleBox';
import MapDeviceIcon from '../../../../components/mapDeviceIcon';
import SensorsModal from '../../../devicesView/sensorsModal';

const DashboardMap = ({ planList = [] }: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const [swiper, setSwiper] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        if (swiper) {
            // @ts-ignore
            swiper.update();
        }
    }, [swiper]);


    const goNext = () => {
        if (swiper) {
            // @ts-ignore
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper) {
            // @ts-ignore
            swiper.slidePrev();
        }
    };

    return (
        <div className={s.dashboardMapContainer}>
            <TitleBox title='نقشه' icon='/images/icons/blackMap.svg' />

            <div className={s.sliderBox}>
                <Swiper
                    // @ts-ignore
                    onSwiper={setSwiper}
                    slidesPerView={1}
                    onSlideChange={(e: any) => setCurrentIndex(e?.activeIndex)}
                    modules={[Navigation]}
                    slidePrevClass={s.swiper_button_next_unique}
                    slideNextClass={s.swiper_button_next_unique}
                    navigation={true}
                    initialSlide={currentIndex}
                >
                    {planList?.map((item: any) =>
                        <SwiperSlide key={item?.ID}>
                            <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item?.plan?.image}`} className={s.image} />
                            <div className={s.devicesListWrapper}>
                                {
                                    item?.devices?.map((node: any) =>
                                        <MapDeviceIcon key={node?.ID} style={{ bottom: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} onClick={toggle} />
                                    )
                                }
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className={s.pagination}>
                    <div className={s.swiper_button_next_unique} onClick={goPrev}>
                        <img src='/images/icons/paginationArrow.svg' />
                    </div>
                    {planList?.map((item: any, index: number) => (
                        <div onClick={() => swiper?.slideTo(index)} className={`${s.paginationItem} ${index === currentIndex && s.activePaginationItem}`}>{index + 1}</div>
                    ))}
                    <div className={s.swiper_button_prev_unique} onClick={goNext}>
                        <img src='/images/icons/paginationArrow.svg' />
                    </div>
                    <div className={s.paginationText}>طبقات</div>
                </div>
                <SensorsModal toggle={toggle} modal={modal} objid={40} />
            </div>
        </div>
    )
}

export default DashboardMap