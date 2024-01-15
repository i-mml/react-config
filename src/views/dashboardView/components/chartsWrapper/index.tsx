import React from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../titleBox';
import { Spinner } from 'reactstrap';


const ChartsWrapper = ({ data }: any) => {
    const healthStorage = data?.healthStorage?.data?.data;
    const cpusStatus = data?.cpusStatus?.data?.data
    const virtualMachines = data?.virtualMachines?.data?.data

    const option = {
        title: {
            show: false
        },
        legend: {
            bottom: 0,
            left: 'center',
            data: healthStorage ? healthStorage?.map((item: any) => item?.sensordata?.name) : []
        },
        series: [{
            type: 'pie',
            radius: '65%',
            selectedMode: "single",
            center: ['50%', '40%'],
            data: healthStorage ? healthStorage?.map((item: any) => ({ value: +item?.sensordata?.uptime?.split("%")[0], name: item?.sensordata?.name })) : [],
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
            data: virtualMachines ? [virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore1"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 2"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 3"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 4 - 1T")]?.map((item: any) => item?.name) : []
        },
        series: [{
            type: 'pie',
            radius: '65%',
            selectedMode: "single",
            center: ['50%', '38%'],
            data: virtualMachines ? [virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore1"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 2"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 3"), virtualMachines?.device?.find((item: any) => item?.name === "Datastore Free: Datastore 4 - 1T")]?.map((item: any) => ({ value: +item?.info?.data[0]?.lastvalue?.split(" %")[0], name: item?.name })) : [],
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

    const product1Data = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];
    const product2Data = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];
    const product3Data = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];

    const barOption = {
        legend: {
            bottom: 0,
            left: 'center',
            data: ['Product 1', 'Product 2', 'Product 3']
        },
        tooltip: {},
        series: [{
            data: product1Data,
            type: 'bar',
            name: 'Product 1'
        }, {
            data: product2Data,
            type: 'bar',
            name: 'Product 2'
        }, {
            data: product3Data,
            type: 'bar',
            name: 'Product 3'
        }],
        xAxis: { type: 'category' },
        yAxis: {},
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
                {
                    virtualMachines?.device?.length > 0 ?
                        <ReactEcharts option={diskUsageOption} />
                        : <Spinner color='primary' />
                }
            </div>

        </div>
    )
}

export default ChartsWrapper