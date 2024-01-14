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

    useEffect(() => {
        setSelectedPlan(planList[0])
    }, [planList])


    return (
        <>
            <div className={s.planTopBox}>
                <div className={s.title}>
                    نقشه
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

                <div className={s.imageContainer}>
                    <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${selectedPlan?.plan?.image}`} className={s.image} />
                    <div className={s.devicesListWrapper}>
                        {
                            selectedPlan?.devices?.map((node: any) =>
                                <MapDeviceIcon key={node?.ID} style={{ bottom: `${node?.y_position}%`, left: `${node?.x_position}%` }} {...node} />
                            )
                        }
                    </div>
                </div>



            </div >

        </>
    )
}

export default PlansView