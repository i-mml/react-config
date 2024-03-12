import React from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../titleBox';
import { Spinner } from 'reactstrap';


const ChartsWrapper = ({ data }: any) => {
    const healthStorage = data?.healthStorage?.data?.data;
    const cpusStatus = data?.cpusStatus?.data?.data
    const virtualMachines = data?.virtualMachines?.data?.data?.device
    const newVirtualMachines = data?.newVirtualMachines?.data?.data?.sensors


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

        </div>
    )
}

export default ChartsWrapper