import React, { useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../../../views/dashboardView/components/titleBox';

const LineChart = () => {
    const [currentTab, setCurrentTab] = useState(1)
    const tabs = [
        { id: 1, title: "روزانه", value: "daily" },
        { id: 2, title: "کاربران", value: "users" },
        { id: 3, title: "کل شبکه", value: "all network" },
    ]

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
                data: [5, 20, 36, 10, 10, 20, 80, 65],
                lineStyle: {
                    color: '#4CA5FF' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
                type: 'line',
                datasetId: 'dataset_since_1950_of_germany',
                showSymbol: false,
                encode: {
                    x: 'Year',
                    y: 'Income',
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            },
            {
                data: [120, 200, 150, 80, 70, 110, 130, 110],
                lineStyle: {
                    color: '#80BFFF' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
                type: 'line',
                datasetId: 'dataset_since_1950_of_germany',
                showSymbol: false,
                encode: {
                    x: 'Year',
                    y: 'Income',
                    itemName: 'Year',
                    tooltip: ['Income']
                }
            },
            {
                data: [140, 120, 88, 120, 130, 180, 60, 200],
                lineStyle: {
                    color: '#007eff' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
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
            <div className={s.topBox}>
                <TitleBox title='ترافیک شبکه' icon='/images/icons/trending-up.svg' />
                <div className={s.tabs}>
                    {tabs?.map((item) =>
                        <div
                            className={`${s.tab} ${item?.id === currentTab ? s.activeTab : ""}`}
                            onClick={() => setCurrentTab(item.id)}
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            </div>
            <ReactEcharts option={option} />
        </div >
    )
}

export default LineChart