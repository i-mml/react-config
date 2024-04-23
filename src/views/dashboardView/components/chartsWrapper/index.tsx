import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../titleBox';
import { Spinner } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import NotificationsBox from '../notificationsBox';
import { adjustData, labelFormatter, labelFormatterWithoutPercent } from '../../../../utils/pieChartHelpers';


const ChartsWrapper = ({ chartsData }: any) => {
    const healthStorage = chartsData?.healthStorage?.data?.data;
    const virtualMachines = chartsData?.virtualMachines?.data?.data?.device
    const newVirtualMachines = chartsData?.newVirtualMachines?.data?.data?.sensors
    const cpusStatus = chartsData?.chartNewCpu?.data?.data?.sensors

    const user = useSelector((state: any) => state?.auth?.data?.user);

    const [donwloadValue, setDownloadValue] = useState(0)
    const [uploadValue, setUploadValue] = useState(0)
    const [rangeValue, setRangeValue] = useState<'UPLOAD' | "DOWNLOAD">("DOWNLOAD")
    const [rangeMax, setRangeMax] = useState(0)

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
            data: adjustData(cpusStatus?.length > 0 ?
                cpusStatus?.map((item: any) => {
                    return {
                        name: item?.device,
                        value: parseFloat(item?.lastvalue || 0) / cpusStatus?.length,
                        percentage: parseFloat(item?.lastvalue || 0)
                    }
                })
                : []),


            // [{ name: "Veeam-BK1", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK1")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
            // { name: "Veeam-BK2", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "Veeam-BK2")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
            // { name: "DNS-Nport", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "CUCM")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) },
            // { name: "CUCM", value: parseFloat(cpusStatus?.find((item: any) => item?.name === "DNS-Nport")?.channels?.find((node: any) => node?.name === "CPU usage")?.maximum?.replace(/[^0-9.]/g, "") || 0) }
            // ] 
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                formatter: labelFormatter,
                show: true,
                position: 'inside',
                // formatter: '% {c}',
                fontSize: "11px",
            },
        }],
    };

    const option = {
        title: {
            show: false
        },
        legend: {
            bottom: 0,
            left: 'center',
            data: healthStorage?.length > 0 ? healthStorage?.map((item: any) => item?.sensordata?.name) : [],

        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{b} : {c} ({d}%)'
        // },
        series: [{
            type: 'pie',
            radius: '65%',

            center: ['50%', '40%'],
            data: adjustData(
                healthStorage?.length > 0 ? healthStorage?.map((item: any) => ({ value: +item?.sensordata?.uptime?.split("%")[0] / healthStorage?.length, name: item?.sensordata?.name, percentage: parseFloat(item?.lastvalue || 0) })) : []
            ),
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
                // formatter: '{c}',
                formatter: labelFormatterWithoutPercent,
            },
        }],

    };


    const diskUsageOption = {
        title: {
            show: false
        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{b} : {c} ({d}%)'
        // },
        legend: {
            bottom: 0,
            left: 'center',
            data: virtualMachines?.length > 0 ? [virtualMachines?.find((item: any) => item?.name === "Datastore 1"), virtualMachines?.find((item: any) => item?.name === "Datastore 2"), virtualMachines?.find((item: any) => item?.name === "Datastore 3"), virtualMachines?.find((item: any) => item?.name === "Datastore 4")]?.map((item: any) => item?.name) : [],

        },
        series: [{
            type: 'pie',
            radius: '65%',

            center: ['50%', '38%'],
            // data: virtualMachines?.length > 0 ? [virtualMachines?.find((item: any) => item?.name === "Datastore 1"), virtualMachines?.find((item: any) => item?.name === "Datastore 2"), virtualMachines?.find((item: any) => item?.name === "Datastore 3"), virtualMachines?.find((item: any) => item?.name === "Datastore 4")]?.map((item: any) => ({ value: +item?.info?.data[0]?.lastvalue?.split(" %")[0], name: item?.name })) : [],
            data: adjustData(
                virtualMachines?.length > 0 ? [virtualMachines?.find((item: any) => item?.name === "Datastore 1"), virtualMachines?.find((item: any) => item?.name === "Datastore 2"), virtualMachines?.find((item: any) => item?.name === "Datastore 3"), virtualMachines?.find((item: any) => item?.name === "Datastore 4")]?.map((item: any) => ({ value: +item?.info?.data[0]?.lastvalue?.split(" %")[0] / 4, name: item?.name, percentage: +item?.info?.data[0]?.lastvalue?.split(" %")[0] })) : []),
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
                // formatter: '% {c}',
                formatter: labelFormatterWithoutPercent,
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
            // 
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
                    const percentage = ((value / maxValue) * 100) > 100 ? 100 : (value / maxValue) * 100;
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

                    <div className={s.diskHealth}>
                        <TitleBox title='سلامت سرور مجازی' />
                        <ReactEcharts option={pieOptions} />
                    </div>
                </div>}


        </div>
    )
}

export default ChartsWrapper