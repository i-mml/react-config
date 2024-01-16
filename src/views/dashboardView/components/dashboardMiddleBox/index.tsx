import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import NotificationsBox from '../notificationsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import MiddleSliderItem from '../middleSliderItem';
import DashboardConnectedDevices from '../dashboardConnectedDevices';
import DashboardCameras from '../dashboardCameras';
import DashboardMap from '../dashboardMap';
import { isMobile } from 'react-device-detect';
import ReactECharts from 'echarts-for-react';
import TitleBox from '../titleBox';
import { useSelector } from 'react-redux';

const DashboardMiddleBox = ({ data, chartsData }: any) => {
    const user = useSelector((state: any) => state?.auth?.data?.user);
    const cpusStatus = chartsData?.cpusStatus?.data?.data

    const [donwloadValue, setDownloadValue] = useState(0)
    const [uploadValue, setUploadValue] = useState(0)
    console.log(chartsData)
    console.log(cpusStatus?.find((item: any) => item?.name === "Veeam-BK2"))
    console.log(cpusStatus?.find((item: any) => item?.name === "CUCM")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum || 0)
    const option = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 220,
                endAngle: -40,
                min: 0,
                max: 10000,
                splitNumber: 10,
                itemStyle: {
                    color: '#007EFF',
                },
                progress: {
                    show: true,
                    width: 20
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 20,
                    }
                },
                axisTick: {
                    distance: 6,
                    splitNumber: 2,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    // distance: -38,
                    // color: '#999',
                    // fontSize: "12px"
                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    width: '80%',
                    lineHeight: 20,
                    borderRadius: 8,
                    offsetCenter: [0, '-8%'],
                    fontSize: 17,
                    fontWeight: 'bold',
                    formatter: `{value}` + `Kbps`,
                    color: '#000',
                },
                data: [
                    {
                        value: donwloadValue
                    }
                ],
            },

        ],

    };


    const pieOptions = {
        title: {
            show: false
        },
        legend: {
            bottom: 0,
            left: 'center',
            data: ["Veeam-BK1", "Veeam-BK2", "DNS-Nport", "CUCM"]
        },
        series: [{
            type: 'pie',
            radius: '70%',
            center: ['50%', '38%'],
            data: cpusStatus ?
                [{ name: "Veeam-BK1", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK1")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                { name: "Veeam-BK2", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK2")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                { name: "DNS-Nport", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "CUCM")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                { name: "CUCM", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "DNS-Nport")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) }
                ] : [],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                show: true,
                position: 'inside',
                formatter: '% {c}',
                fontSize: "11px",
            },
        }],

    };

    useEffect(() => {
        setDownloadValue(+data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Traffic In")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
        setUploadValue(+data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Traffic Out")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
    }, [data?.netSTatus])

    return (
        <div className={s.container}>
            {
                user?.role === 1 &&
                <div className={s.contentSupoerAdmin}>
                    <div className={s.middleSlider}>
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            modules={[Pagination]}
                            className={s.slider}
                        >
                            {
                                data?.bannersList?.length > 0 && data?.bannersList?.map((item: any) => (
                                    <SwiperSlide key={item?.id}>
                                        <MiddleSliderItem  {...item} />
                                    </SwiperSlide>
                                ))}

                        </Swiper>
                    </div>
                </div>
            }
            {user?.role !== 1 &&
                <div className={s.content}>
                    {!isMobile && <DashboardMap planList={data?.planList} />}
                    <div className={s.middleSlider}>
                        <Swiper
                            slidesPerView={1}
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            className={s.slider}
                            autoplay={{ delay: 2000 }}
                            speed={500}
                        >
                            {
                                data?.bannersList?.length > 0 && data?.bannersList?.map((item: any) => (
                                    <SwiperSlide key={item?.id}>
                                        <MiddleSliderItem  {...item} />
                                    </SwiperSlide>
                                ))}

                        </Swiper>
                    </div>
                    <div className={s.smallBoxWrapper}>
                        <div className={s.smallBox}>
                            <DashboardConnectedDevices devices={data?.devicesList} />
                        </div>
                        <div className={s.smallBox}>
                            <DashboardCameras camerasList={data?.camerasList} />
                        </div>
                    </div>
                </div >
            }
            {user?.role !== 1 &&
                <div className={s.notifications}>
                    <div className={s.speedTest}>
                        <div className={s.titleBoxContainer}>
                            <TitleBox title='سرعت اینترنت' />
                        </div>
                        <ReactECharts option={option} />
                        <div className={s.speedBottom}>
                            <div className={s.section}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="14" viewBox="0 0 63 14" fill="none">
                                    <path d="M62.4492 0.813152C53.7433 1.95925 50.9021 6.36578 42.0234 6.86332C33.8377 7.32204 29.7232 3.09327 21.5977 3.83824C11.744 4.74164 11.1275 12.5858 1.17187 12.9135" stroke="#FE9B0E" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Upload Kpbs</p>
                                <p className={s.value}>{uploadValue}</p>
                            </div>
                            <div className={s.section}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="14" viewBox="0 0 60 14" fill="none">
                                    <path d="M59.2227 0.813152C50.9313 1.95925 48.2254 6.36578 39.7695 6.86332C31.9736 7.32204 28.055 3.09327 20.3164 3.83824C10.932 4.74164 10.3448 12.5858 0.863281 12.9135" stroke="#007EFF" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Download Kpbs</p>
                                <p className={s.value}>{donwloadValue}</p>
                            </div>
                        </div>
                    </div>
                    <NotificationsBox notifications={data?.notificationsList?.sensors} />
                    <div className={s.diskHealth}>
                        <TitleBox title='سلامت سرور مجازی' />
                        <ReactECharts option={pieOptions} />
                    </div>
                </div>}

        </div >
    )
}

export default DashboardMiddleBox