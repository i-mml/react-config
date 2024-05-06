import React, { useEffect, useState } from 'react'
import s from './style.module.scss';
import ReactEcharts from "echarts-for-react";
import TitleBox from '../../../views/dashboardView/components/titleBox';
import moment from "moment-jalaali";
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';

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

const LineChart = ({ data, netData }: any) => {
    const chartGraphData = data?.chartGraph?.data?.data
    const user = useSelector((state: any) => state?.auth?.data?.user);

    const [currentTab, setCurrentTab] = useState(1)
    const [donwloadValue, setDownloadValue] = useState(0)
    const [uploadValue, setUploadValue] = useState(0)
    const [rangeValue, setRangeValue] = useState<'UPLOAD' | "DOWNLOAD">("DOWNLOAD")
    const [rangeMax, setRangeMax] = useState(0)

    const tabs = [
        { id: 1, title: "روزانه", value: "daily" },
        { id: 2, title: "کاربران", value: "users" },
        { id: 3, title: "کل شبکه", value: "all network" },
    ]

    const oneMilion = 1000000
    const isDataEmpty = !Array.isArray(chartGraphData?.values) || chartGraphData?.values?.length === 0
    const option = {
        xAxis: {

            data: isDataEmpty ? [] : chartGraphData?.values?.slice(0, 50)?.reverse()?.map((item: any) => moment(item?.datetime, "M/D/YYYY h:mm:ss").format('h:mm')),
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
        series:
            isDataEmpty ? [] :
                [
                    {
                        data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(0, 50)?.reverse()?.map((item: any) => Number(item?.['Traffic Out (volume)']) / oneMilion) : [],
                        name: 'ترافیک خارجی',
                        type: 'line',
                        stack: 'Total',
                        emphasis: {
                            focus: 'series'
                        },
                        lineStyle: {
                            color: '#76bdef' // Gray line color for shadow
                        },
                        itemStyle: {
                            opacity: 0 // Make the shadow invisible
                        },
                        areaStyle: {
                            color: '#76bdef80' // Gray color for shadow area
                        },
                        showSymbol: false,
                    },
                    {
                        data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(0, 50)?.reverse()?.map((item: any) => Number(item?.['Traffic In (volume)']) / oneMilion) : [],
                        name: 'ترافیک داخلی',
                        type: 'line',
                        stack: 'Total',
                        emphasis: {
                            focus: 'series'
                        },
                        lineStyle: {
                            color: '#007eff' // Gray line color for shadow
                        },
                        itemStyle: {
                            opacity: 0 // Make the shadow invisible
                        },
                        areaStyle: {
                            color: '#007eff80' // Gray color for shadow area
                        },
                        showSymbol: false,
                    },
                    {
                        data: Array.isArray(chartGraphData?.values) && chartGraphData?.values?.length > 0 ? chartGraphData?.values?.slice(0, 50)?.reverse()?.map((item: any) => Number(item?.['Traffic Total (volume)'] / oneMilion)) : [],
                        name: 'ترافیک کل',
                        type: 'line',
                        stack: 'Total',
                        emphasis: {
                            focus: 'series'
                        },
                        lineStyle: {
                            color: '#0033ff' // Gray line color for shadow
                        },
                        itemStyle: {
                            opacity: 0 // Make the shadow invisible
                        },
                        areaStyle: {
                            color: '#00518a95' // Gray color for shadow area
                        },
                        showSymbol: false,

                    },

                ]
    };


    const internetOption = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '50%'],
                startAngle: 220,
                endAngle: -40,
                min: 0,
                max: rangeMax,
                splitNumber: 10,
                itemStyle: {
                    color: rangeValue === "DOWNLOAD" ? '#007EFF' : "#feb957",
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
                    formatter: `{value}` + `${data?.netSTatus?.data?.data?.channels?.find((item: any) => rangeValue === "DOWNLOAD" ? item?.name === "Download Speed" : item?.name === "Upload Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`,
                    color: '#000',
                },
                data: [
                    {
                        value: rangeValue === "DOWNLOAD" ? donwloadValue : uploadValue
                    }
                ],
            },

        ],

    };


    const getRangeMax = () => {
        if (rangeValue === "DOWNLOAD") {
            setRangeMax(donwloadValue > 50 ? 100 : donwloadValue > 10 ? 50 : donwloadValue > 0 ? 10 : 100)
        } else {
            setRangeMax(uploadValue > 50 ? 100 : uploadValue > 10 ? 50 : uploadValue > 0 ? 10 : 100)
        }
    }

    useEffect(() => {
        setDownloadValue(+netData?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Download Speed")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
        setUploadValue(+netData?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Upload Speed")?.lastvalue.split(" ")[0]?.split(",")?.join("") || 0)
    }, [netData?.netSTatus])

    useEffect(() => {
        getRangeMax()
    }, [])

    return (
        <>
            {isMobile && user?.role !== 1 &&
                <div className={s.notifications}>
                    <div className={s.speedTest}>
                        <div className={s.titleBoxContainer}>
                            <TitleBox title='سرعت اینترنت' />
                        </div>
                        <ReactEcharts option={internetOption} />
                        <div className={s.speedBottom}>
                            <div className={s.section} onClick={() => setRangeValue("UPLOAD")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="14" viewBox="0 0 63 14" fill="none">
                                    <path d="M62.4492 0.813152C53.7433 1.95925 50.9021 6.36578 42.0234 6.86332C33.8377 7.32204 29.7232 3.09327 21.5977 3.83824C11.744 4.74164 11.1275 12.5858 1.17187 12.9135" stroke="#FE9B0E" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Upload {`${data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Upload Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`}</p>
                                <p className={s.value}>{uploadValue}</p>
                            </div>
                            <div className={s.section} onClick={() => setRangeValue("DOWNLOAD")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="14" viewBox="0 0 60 14" fill="none">
                                    <path d="M59.2227 0.813152C50.9313 1.95925 48.2254 6.36578 39.7695 6.86332C31.9736 7.32204 28.055 3.09327 20.3164 3.83824C10.932 4.74164 10.3448 12.5858 0.863281 12.9135" stroke="#007EFF" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className={s.title}>Download {`${data?.netSTatus?.data?.data?.channels?.find((item: any) => item?.name === "Download Speed")?.lastvalue.split(" ")[1]?.split(",")?.join("") || ""}`}</p>
                                <p className={s.value}>{donwloadValue}</p>
                            </div>
                        </div>
                    </div>
                </div>}
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

        </>
    )
}

export default LineChart