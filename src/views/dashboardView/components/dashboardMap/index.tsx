import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleBox from '../titleBox';
import MapDeviceIcon from '../../../../components/mapDeviceIcon';


const DashboardMap = ({ planList = [] }: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [zoomValue, setZoomValue] = useState(1)

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
    const zoomsList = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5]
    return (
        <div className={s.dashboardMapContainer}>
            <TitleBox title='نقشه' icon='/images/icons/blackMap.svg' />
            <div className={s.sliderBox} style={{
                transform: `scale(${zoomValue})`
            }}>
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
                    {planList?.length > 0 && planList?.map((item: any) =>
                        <SwiperSlide key={item?.ID}>
                            <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item?.plan?.image}`} className={s.image} />
                            <div className={s.devicesListWrapper}>
                                {
                                    item?.devices?.map((node: any) =>
                                        <MapDeviceIcon key={node?.ID} style={{ top: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                                    )
                                }
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className={s.pagination}>

                <div className={s.swiper_button_next_unique} onClick={goPrev}>
                    <img src='/images/icons/paginationArrow.svg' />
                </div>
                {planList?.length > 0 && planList?.map((item: any, index: number) => (
                    <div onClick={() => swiper?.slideTo(index)} className={`${s.paginationItem} ${index === currentIndex && s.activePaginationItem}`}>{index + 1}</div>
                ))}
                <div className={s.swiper_button_prev_unique} onClick={goNext}>
                    <img src='/images/icons/paginationArrow.svg' />
                </div>
                <div className={s.planName}>
                    {planList[currentIndex]?.plan?.title}
                </div>
                <div className={s.zoomBox}>
                    <button onClick={() => setZoomValue(prev => +Math.abs(prev + 0.1)?.toFixed(1))} disabled={zoomValue > 1.4} className={s.zoomBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="plus-circle">
                                <path id="Icon" d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </button>
                    <select
                        className={s.select}
                        onChange={(e) => {
                            setZoomValue((+e.target.value))
                        }}
                        value={+Math.abs(zoomValue)?.toFixed(1)}
                    >
                        {
                            zoomsList?.map(item => <option value={item} key={item}>{+Math.abs(item * 100)?.toFixed(1)}</option>)
                        }
                    </select>
                    <button onClick={() => setZoomValue(prev => +Math.abs(prev - 0.1)?.toFixed(1))} disabled={zoomValue < 0.6} className={s.zoomBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="minus-circle">
                                <path id="Icon" d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default DashboardMap