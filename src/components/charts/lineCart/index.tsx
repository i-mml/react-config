import React from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                datasetId: 'dataset_since_1950_of_germany',
                showSymbol: false,
                encode: {
                    x: 'Year',
                    y: 'Income',
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            }

        ]
    };
    return (
        <div className={s.container}>
            <ReactEcharts option={option} />
        </div>
    )
}

export default LineChart