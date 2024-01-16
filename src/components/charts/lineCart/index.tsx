import React, { useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../../../views/dashboardView/components/titleBox';
import moment from 'moment-jalaali';

const YearItem = ({ value, color }: { value: string, color: string }) => {
    const colorClasses: any = {
        "007eff": s.middleYear,
        "4CA5FF": s.topYear,
        "80BFFF": s.bottomYear
    }
    return (
        <div className={s.year}>
            <span>{value}</span>
            <span className={`${s.badge} ${colorClasses[color]}`}></span>
        </div>
    )
}

const LineChart = ({ data }: any) => {
    const chartGraphData = data?.chartGraph?.data?.data
    const [currentTab, setCurrentTab] = useState(1)
    const tabs = [
        { id: 1, title: "روزانه", value: "daily" },
        { id: 2, title: "کاربران", value: "users" },
        { id: 3, title: "کل شبکه", value: "all network" },
    ]

    const option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        center: ['60%', '40%'],
        series: [
            {
                data: chartGraphData?.values?.slice(-50)?.map((item: any) => item?.['Traffic Total (volume)']),
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
                // encode: {
                //     x: 'Year',
                //     y: 'Income',
                //     itemName: 'Year',
                //     tooltip: ['Income']
                // }
            },
            {
                data: chartGraphData?.values?.slice(-50)?.map((item: any) => item?.['Traffic In (volume)']),
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
                data: chartGraphData?.values?.slice(-50)?.map((item: any) => item?.['Traffic Out (volume)']),
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
                {/* <div className={s.tabs}>
                    {tabs?.map((item) =>
                        <div
                            className={`${s.tab} ${item?.id === currentTab ? s.activeTab : ""}`}
                            onClick={() => setCurrentTab(item.id)}
                        >
                            {item.title}
                        </div>
                    )}
                </div> */}
                <div className={s.tabs}>
                    <YearItem color='80BFFF' value='Traffic Total (volume)' />
                    <YearItem color='4CA5FF' value='Traffic In (volume)' />
                    <YearItem color='007eff' value='Traffic Out (volume)' />
                </div>
            </div>

            {/* @ts-ignore */}
            <ReactEcharts option={option} style={{ width: "100%", }}
            />
        </div >
    )
}

export default LineChart