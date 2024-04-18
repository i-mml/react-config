import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleBox from '../titleBox';
import MapDeviceIcon from '../../../../components/mapDeviceIcon';
import OpenInTabIcon from '../../../../components/icons/OpenInTab';
import DashboardMapModal from '../dashboardMapModal';
import { isMobile } from 'react-device-detect';


const DashboardMap = ({ planList = [], isModal = false }: any) => {
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleMapModal = () => setIsOpen(!isOpen);
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
                            <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item?.plan?.image}`} className={`${s.image} ${isModal ? s.imagenomaxheight : null}`} />
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
                    {
                        !isModal && !isMobile ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28" height="28"
                                onClick={toggleMapModal}>
                                <path fill="#B8B8B8" d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" /></svg> : null
                    }
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
            {
                isOpen ?
                    <DashboardMapModal toggle={toggleMapModal} isOpen={isOpen} planList={planList} />
                    : null
            }
        </div >
    )
}

export default DashboardMap