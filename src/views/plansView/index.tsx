import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import MapDeviceIcon from '../../components/mapDeviceIcon';
import { useQuery } from 'react-query';
import { getPlanAll } from '../../api/services/plan';
import { useSelector } from 'react-redux';

const PlansView = () => {
    const authData = useSelector((state: any) => state?.auth?.data)
    const { data: planList = [] } = useQuery("get-all-plan", () => getPlanAll(authData?.admin?.company_Id))

    const [selectedPlan, setSelectedPlan] = useState<any>()
    const [zoomValue, setZoomValue] = useState(1)

    const zoomsList = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5]


    useEffect(() => {
        setSelectedPlan(planList[0])
    }, [planList])



    return (
        <>
            <div className={s.planTopBox}>
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
                <select
                    className={s.select}
                    onChange={(e) => {
                        setSelectedPlan(planList?.find((item: any) => +item?.plan?.ID === +e.target.value))
                    }}
                >
                    {planList?.length > 0 && planList?.map((item: any) =>
                        <option value={item?.plan?.ID}>{item?.plan?.title}</option>
                    )}
                </select>
            </div>
            <div className={s.container}>
                <div className={s.imageContainer}
                    style={{
                        transform: `rotate(90deg) translateX(19%) translateY(-30%) scale(${zoomValue})`
                    }}>
                    <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${selectedPlan?.plan?.image}`} className={s.image} />
                    <div className={s.devicesListWrapper}>
                        {
                            selectedPlan?.devices?.map((node: any) =>
                                <MapDeviceIcon key={node?.ID} style={{ top: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlansView