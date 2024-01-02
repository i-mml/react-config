import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import MapDeviceIcon from '../../components/mapDeviceIcon';
import { useQuery } from 'react-query';
import { getPlanAll } from '../../api/services/plan';

const PlansView = () => {
    const { data: planList = [] } = useQuery("get-all-plan", getPlanAll)
    const [selectedItem, setSelectedItem] = useState<any>(planList[0]?.plan?.ID)
    const [selectedPlan, setSelectedPlan] = useState<any>()

    const planList2 = [
        {
            "plan": {
                "company_id": 2,
                "image": "/images/plan/1704124089IMG_20240101_180844_347.jpg",
                "title": "طبقه دوم",
                "active": true,
                "position": 2,
                "ID": 1,
                "CreatedAt": "2023-12-25T21:24:45+03:30",
                "UpdatedAt": "2024-01-01T22:48:09+03:30",
                "DeletedAt": null
            },
            "devices": [
                {
                    "device_id": "#1225",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 10,
                    "y_position": 20,
                    "ID": 1,
                    "CreatedAt": "2023-12-25T21:27:11+03:30",
                    "UpdatedAt": "2023-12-25T21:27:11+03:30",
                    "DeletedAt": null
                },
                {
                    "device_id": "#1025",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 15,
                    "y_position": 30,
                    "ID": 2,
                    "CreatedAt": "2023-12-25T21:27:39+03:30",
                    "UpdatedAt": "2023-12-25T21:27:39+03:30",
                    "DeletedAt": null
                },
                {
                    "device_id": "#1025",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 74,
                    "y_position": 50,
                    "ID": 3,
                    "CreatedAt": "2023-12-27T19:13:46+03:30",
                    "UpdatedAt": "2023-12-27T19:13:46+03:30",
                    "DeletedAt": null
                }
            ]
        },
        {
            "plan": {
                "company_id": 2,
                "image": "/images/plan/1704124089IMG_20240101_180844_347.jpg",
                "title": "طبقه دوم",
                "active": true,
                "position": 2,
                "ID": 1,
                "CreatedAt": "2023-12-25T21:24:45+03:30",
                "UpdatedAt": "2024-01-01T22:48:09+03:30",
                "DeletedAt": null
            },
            "devices": [
                {
                    "device_id": "#1225",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 10,
                    "y_position": 20,
                    "ID": 1,
                    "CreatedAt": "2023-12-25T21:27:11+03:30",
                    "UpdatedAt": "2023-12-25T21:27:11+03:30",
                    "DeletedAt": null
                },
                {
                    "device_id": "#1025",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 15,
                    "y_position": 30,
                    "ID": 2,
                    "CreatedAt": "2023-12-25T21:27:39+03:30",
                    "UpdatedAt": "2023-12-25T21:27:39+03:30",
                    "DeletedAt": null
                },
                {
                    "device_id": "#1025",
                    "plan_id": 1,
                    "active": true,
                    "x_position": 74,
                    "y_position": 50,
                    "ID": 3,
                    "CreatedAt": "2023-12-27T19:13:46+03:30",
                    "UpdatedAt": "2023-12-27T19:13:46+03:30",
                    "DeletedAt": null
                }
            ]
        }
    ]


    useEffect(() => {
        const foundSelected = planList?.find((item: any) => item?.plan?.ID === selectedItem)
        setSelectedPlan(foundSelected)
    }, [selectedItem])

    useEffect(() => {
        setSelectedItem(planList[0]?.plan?.ID)
    }, [planList])

    return (
        <>
            <div className={s.planTopBox}>
                <div className={s.title}>
                    نقشه
                </div>
                <select
                    className={s.select}
                >
                    {planList?.map((item: any) =>
                        <option value={item?.plan?.ID}>{item?.plan?.title}</option>
                    )}
                </select>

            </div>

            <div className={s.container}>
                {planList2?.map((item: any) =>
                    <div>
                        <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${selectedPlan?.plan?.image}`} className={s.image} />
                        <div className={s.devicesListWrapper}>
                            {
                                selectedPlan?.devices?.map((node: any) =>
                                    <MapDeviceIcon key={node?.ID} style={{ bottom: `${node?.y_position}%`, left: `${node?.x_position}%` }} />
                                )
                            }
                        </div>
                    </div>

                )}


            </div >

        </>
    )
}

export default PlansView