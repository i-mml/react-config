import React, { useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../../../views/dashboardView/components/titleBox';

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
            data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', "آبان", "آذر", "دی", "بهمن", "اسفند"]
        },
        yAxis: {
            type: 'value'
        },
        center: ['60%', '40%'],
        series: [
            {
                data: [5, 20, 36, 10, 10, 20, 80, 65, 44, 180, 150, 120, 115, 189, 197, 148, 150, 150],
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
                data: [120, 200, 150, 80, 70, 110, 130, 110, 40, 80, 97, 155, 210, 100],
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
                data: [140, 120, 88, 120, 130, 180, 60, 200, 190, 175, 164, 188, 191, 146,],
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
            <div className={s.years}>
                <YearItem color='4CA5FF' value='1400' />
                <YearItem color='80BFFF' value='1401' />
                <YearItem color='007eff' value='1402' />
            </div>
            {/* @ts-ignore */}
            <ReactEcharts option={option} style={{ width: "100%", }}
            />
        </div >
    )
}

export default LineChart