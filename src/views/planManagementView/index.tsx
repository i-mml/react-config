import React, { useEffect, useRef, useState } from 'react'
import s from './style.module.scss';
import TitleBox from '../dashboardView/components/titleBox';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPlanAll } from '../../api/services/plan';
import MapDeviceIcon from '../../components/mapDeviceIcon';
import DevicesModal from '../devicesView/devicesModal';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Spinner } from 'reactstrap';

const PlanManagementView = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [tags, setTags] = useState<any>([])
    const [swiper, setSwiper] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const authData = useSelector((state: any) => state?.auth?.data)
    const [searchParams] = useSearchParams();

    const { data: planList = [], isLoading } = useQuery("get-all-plan", () => getPlanAll(Number(searchParams?.get("companyId"))))

    const ref = useRef<any>()

    useEffect(() => {
        if (planList?.length > 0) {
            setTags(planList[swiper?.activeIndex]?.devices)
        }
    }, [isLoading, swiper?.activeIndex])

    const handleClick = (event: any) => {
        const rect = event.target?.getBoundingClientRect();
        const x = event.clientX - rect.left - 11;
        const y = event.clientY - rect.top - 11;
        setTags((prev: any) => [...prev, { x_position: Math.ceil((x / ref.current?.clientWidth) * 100), y_position: Math.ceil((y / ref.current?.clientHeight) * 100) }])
        toggle()
    }

    const handleCreatePlanManagement = async (item: any) => {
        const body = {
            device_id: item?.objid,
            plan_id: 1,
            active: item?.fold,
            ...tags[tags?.length - 1]
        }
        console.log(body)
        // await postPlanManagementCreate()
    }

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index: number, className: string) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // };

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
        <div className={s.container}>
            <div className={s.titleWrappwer}>
                <TitleBox title='مدیریت پلن' />
            </div>
            {/* <div className={s.box}>

                <img ref={ref} className={s.image} src={"http://content.nport.ir/images/plan/1.jpg"} onClick={handleClick} />
                <div className={s.devicesListWrapper}>
                    {
                        tags?.map((node: any) =>
                            <MapDeviceIcon key={node?.ID} style={{ top: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                        )
                    }
                </div>
                <DevicesModal modal={modal} toggle={toggle} onItemClick={(e: number) => handleCreatePlanManagement(e)} />
            </div> */}
            {isLoading ? <Spinner color='info' /> :
                <div className={s.box}>
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
                                <img ref={ref} src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item?.plan?.image}`} className={s.image} onClick={handleClick} />
                                <div className={s.devicesListWrapper}>
                                    {
                                        tags?.map((node: any) =>
                                            <MapDeviceIcon key={node?.ID} style={{ top: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                                        )
                                    }
                                </div>
                                <DevicesModal modal={modal} toggle={toggle} onItemClick={(e: number) => handleCreatePlanManagement(e)} />
                            </SwiperSlide>
                        )}
                    </Swiper>
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
                        <div className={s.paginationText}>طبقات</div>
                    </div>
                </div>}
        </div>
    )
}

export default PlanManagementView