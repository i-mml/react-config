import React from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../titleBox';


const ChartsWrapper = ({ data }: any) => {
    const healthStorage = data?.healthStorage?.data?.data
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
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
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
                <TitleBox title='نمودار ماشین های مجازی' />
                <ReactEcharts option={option} />
            </div>

        </div>
    )
}

export default ChartsWrapper