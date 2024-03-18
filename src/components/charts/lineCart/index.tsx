import React, { useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../../../views/dashboardView/components/titleBox';
import moment from "moment-jalaali";

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
    const oneMilion = 1000000
    const option = {
        xAxis: {

            data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(-50)?.map((item: any) => moment(item?.datetime, "M/D/YYYY h:mm:ss").format('h:mm')) : [],
            // the last version of graph '(h:mm)|jYYYY/jMM/jDD'
            axisLabel: {
                rotate: 90,
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                rich: {
                    value: {
                        color: '#333',
                        fontSize: 12,
                        fontWeight: 'bold'
                    },
                    unit: {
                        color: '#888',
                        fontSize: 10,
                        fontWeight: 'normal'
                    }
                },
                formatter: function (value: any) {
                    // Convert the value to a locale string and then concatenate with ' Mb/s'
                    // Use the rich text placeholders for the value and unit
                    return '{value|' + value.toLocaleString() + '} {unit|Mb/s}';
                }
            }
        },
        center: ['60%', '40%'],
        legend: {
            data: ['ترافیک کل', 'ترافیک داخلی', 'ترافیک خارجی'],
            selectedMode: true,
            textStyle: {
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "Vazirmmatn"
            }

        },
        series: [
            {
                data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(-50)?.map((item: any) => Number(item?.['Traffic Total (volume)'] / oneMilion)) : [],
                name: 'ترافیک کل',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: '#4CA5FF' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
                showSymbol: false,

            },
            {
                data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(-50)?.map((item: any) => Number(item?.['Traffic In (volume)']) / oneMilion) : [],
                name: 'ترافیک داخلی',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: '#4CA5FF' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
                showSymbol: false,
            },
            {
                data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(-50)?.map((item: any) => Number(item?.['Traffic Out (volume)']) / oneMilion) : [],
                name: 'ترافیک خارجی',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: '#4CA5FF' // Gray line color for shadow
                },
                itemStyle: {
                    opacity: 0 // Make the shadow invisible
                },
                areaStyle: {
                    color: '#B2DEFF80' // Gray color for shadow area
                },
                showSymbol: false,
            }

        ]
    };
    return (
        <div className={s.container} >
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
                {/* <div className={s.tabs}>
                    <YearItem color='80BFFF' value='Traffic Total (volume)' />
                    <YearItem color='4CA5FF' value='Traffic In (volume)' />
                    <YearItem color='007eff' value='Traffic Out (volume)' />
                </div> */}
            </div>

            {/* @ts-ignore */}
            <ReactEcharts option={option} style={{ width: "100%", }}
            />
        </div >
    )
}

export default LineChart