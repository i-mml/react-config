import React from 'react'
import s from './style.module.scss';
import NotificationsBox from '../notificationsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MiddleSliderItem from '../middleSliderItem';
import DashboardConnectedDevices from '../dashboardConnectedDevices';
import DashboardCameras from '../dashboardCameras';
import DashboardMap from '../dashboardMap';
import { isMobile } from 'react-device-detect';
import ReactECharts from 'echarts-for-react';
import TitleBox from '../titleBox';

const DashboardMiddleBox = ({ data }: any) => {
    const option = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 220,
                endAngle: -40,
                min: 0,
                max: 60,
                splitNumber: 12,
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
                    offsetCenter: [0, '-15%'],
                    fontSize: 20,
                    fontWeight: 'bolder',
                    formatter: `{value}` + `Mbps`,
                    color: '#000',
                },
                data: [
                    {
                        value: 20
                    }
                ],
            },

        ],

    };

    return (
        <div className={s.container}>
            <div className={s.content}>
                {!isMobile && <DashboardMap planList={data?.planList} />}
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
                <div className={s.smallBoxWrapper}>
                    <div className={s.smallBox}>
                        <DashboardConnectedDevices devices={data?.devicesList} />
                    </div>
                    <div className={s.smallBox}>
                        <DashboardCameras camerasList={data?.camerasList} />
                    </div>
                </div>
            </div >
            <div className={s.notifications}>
                <div className={s.speedTest}>
                    <div className={s.titleBoxContainer}>
                        <TitleBox title='سرعت اینترنت' />
                    </div>
                    <ReactECharts option={option} />
                    <div className={s.speedBottom}>
                        <div className={s.section}>
                            <p className={s.title}>Upload Mpbs</p>
                            <p className={s.value}>48.2</p>
                        </div>
                        <div className={s.section}>
                            <p className={s.title}>Download Mpbs</p>
                            <p className={s.value}>48.2</p>
                        </div>
                    </div>
                </div>
                <NotificationsBox notifications={data?.notificationsList?.sensors} />
            </div>
        </div >
    )
}

export default DashboardMiddleBox