import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../titleBox';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import NotificationsBox from '../notificationsBox';


const ChartsWrapper = ({ data }: any) => {
    const healthStorage = data?.healthStorage?.data?.data;
    const virtualMachines = data?.virtualMachines?.data?.data?.device
    const newVirtualMachines = data?.newVirtualMachines?.data?.data?.sensors
    const cpusStatus = data?.chartNewCpu?.data?.data?.sensors

    const user = useSelector((state: any) => state?.auth?.data?.user);

    const [donwloadValue, setDownloadValue] = useState(0)
    const [uploadValue, setUploadValue] = useState(0)

    const internetOption = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 220,
                endAngle: -40,
                min: 0,
                max: donwloadValue > 50 ? 100 : donwloadValue > 10 ? 50 : donwloadValue > 0 ? 10 : 100,
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
                    formatter: `{value}` + `${data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Download Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`,
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
            data: cpusStatus?.length > 0 ?
                cpusStatus?.map((item: any) => item?.device)
                : []
        },
        series: [{
            type: 'pie',
            radius: '70%',
            center: ['50%', '38%'],
            data: cpusStatus?.length > 0 ?
                cpusStatus?.map((item: any) => {
                    return {
                        name: item?.device,
                        value: parseFloat(item?.lastvalue || 0)
                    }
                })
                // [{ name: "Veeam-BK1", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK1")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                // { name: "Veeam-BK2", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK2")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                // { name: "DNS-Nport", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "CUCM")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
                // { name: "CUCM", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "DNS-Nport")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) }
                // ] 
                : [],
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
        setDownloadValue(+data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Download Speed")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
        setUploadValue(+data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Upload Speed")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
    }, [data?.netSTatus])


    const option = {
        title: {
            show: false
        },
        legend: {
            bottom: 0,
            left: 'center',
            data: healthStorage?.length > 0 ? healthStorage?.map((item: any) => item?.sensordata?.name) : []
        },
        series: [{
            type: 'pie',
            radius: '65%',
            selectedMode: "single",
            center: ['50%', '40%'],
            data: healthStorage?.length > 0 ? healthStorage?.map((item: any) => ({ value: +item?.sensordata?.uptime?.split("%")[0], name: item?.sensordata?.name })) : [],
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
                formatter: '% {c}'
            },
        }],

    };


    const diskUsageOption = {
        title: {
            show: false
        },
        legend: {
            bottom: 0,
            left: 'center',
            data: virtualMachines?.length > 0 ? [virtualMachines?.find((item: any) => item?.name === "Datastore 1"), virtualMachines?.find((item: any) => item?.name === "Datastore 2"), virtualMachines?.find((item: any) => item?.name === "Datastore 3"), virtualMachines?.find((item: any) => item?.name === "Datastore 4")]?.map((item: any) => item?.name) : [],
            selectedMode: 'single'
        },
        series: [{
            type: 'pie',
            radius: '65%',
            selectedMode: "single",
            center: ['50%', '38%'],
            data: virtualMachines?.length > 0 ? [virtualMachines?.find((item: any) => item?.name === "Datastore 1"), virtualMachines?.find((item: any) => item?.name === "Datastore 2"), virtualMachines?.find((item: any) => item?.name === "Datastore 3"), virtualMachines?.find((item: any) => item?.name === "Datastore 4")]?.map((item: any) => ({ value: +item?.info?.data[0]?.lastvalue?.split(" %")[0], name: item?.name })) : [],

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
    const maxValue = newVirtualMachines?.length > 0 ? Math.max(...newVirtualMachines?.map((item: any) => parseFloat(item?.lastvalue?.split(" %")[0]))) : 0;
    const barOption = {
        legend: {
            bottom: 0,
            left: 'center',
            data: newVirtualMachines?.length > 0 ? newVirtualMachines?.map((item: any) => item?.sensor) : [],
            // selected: {
            //     'Series 1': true,
            // },
            // selectedMode: 'single'
        },
        tooltip: {},
        series: newVirtualMachines?.map((item: any) => {
            const dataVal = Math.abs(item?.lastvalue?.split(" %")[0])

            return {
                data: [dataVal],
                type: "bar",
                name: item?.sensor,
                barMinHeight: 5
            }
        }),
        // series: [{
        //     data: cpusStatus?.find((item: any) => item?.name === "WINSRV2022")?.channels?.map((node: any) => parseFloat(node?.info?.data[0]?.lastvalue?.replace(/[^0-9.]/g, ""))),
        //     type: 'bar',
        //     name: 'WINSRV2022',
        //     barMinHeight: 5
        // }, {
        //     data: cpusStatus?.find((item: any) => item?.name === "Ubuntu-Akaam")?.channels?.map((node: any) => parseFloat(node?.info?.data[0]?.lastvalue?.replace(/[^0-9.]/g, ""))),
        //     type: 'bar',
        //     name: "Ubuntu-Akaam"
        // }, {
        //     data: cpusStatus?.find((item: any) => item?.name === "PRTG-Core")?.channels?.map((node: any) => parseFloat(node?.info?.data[0]?.lastvalue?.replace(/[^0-9.]/g, ""))),
        //     type: 'bar',
        //     name: 'Product 3'
        // }],
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                rotate: 90,
                fontSize: 10,
                formatter: function (value: any) {
                    const percentage = (value / maxValue) * 100;
                    return `${percentage.toFixed(0)}%`; // Adjust the number of decimal places as needed
                }
            }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        // series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };


    return (
        <div className={s.smallBoxWrapper}>
            <div className={s.smallBox}>
                <TitleBox title='سلامت دیسک ها' />
                <ReactEcharts option={option} />
            </div>
            <div className={s.smallBox}>
                <TitleBox title='نمودار ماشین های مجازی' />
                <ReactEcharts option={barOption} />
            </div>
            <div className={s.smallBox}>
                <TitleBox title='حجم دیسک سرور مجازی' />

                <ReactEcharts option={diskUsageOption} />
            </div>

            {isMobile && user?.role !== 1 &&
                <div className={s.notifications}>
                    <div className={s.speedTest}>
                        <div className={s.titleBoxContainer}>
                            <TitleBox title='سرعت اینترنت' />
                        </div>
                        <ReactEcharts option={internetOption} />
                        <div className={s.speedBottom}>
                            <div className={s.section}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="14" viewBox="0 0 63 14" fill="none">
                                    <path d="M62.4492 0.813152C53.7433 1.95925 50.9021 6.36578 42.0234 6.86332C33.8377 7.32204 29.7232 3.09327 21.5977 3.83824C11.744 4.74164 11.1275 12.5858 1.17187 12.9135" stroke="#FE9B0E" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Upload {`${data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Upload Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`}</p>
                                <p className={s.value}>{uploadValue}</p>
                            </div>
                            <div className={s.section}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="14" viewBox="0 0 60 14" fill="none">
                                    <path d="M59.2227 0.813152C50.9313 1.95925 48.2254 6.36578 39.7695 6.86332C31.9736 7.32204 28.055 3.09327 20.3164 3.83824C10.932 4.74164 10.3448 12.5858 0.863281 12.9135" stroke="#007EFF" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Download {`${data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Download Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`}</p>
                                <p className={s.value}>{donwloadValue}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.diskHealth}>
                        <TitleBox title='سلامت سرور مجازی' />
                        <ReactEcharts option={pieOptions} />
                    </div>
                </div>}


        </div>
    )
}

export default ChartsWrapper