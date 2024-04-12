import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

const CustomPieChart = ({ data, legendData, selectedMode = "" }: any) => {
    const chartRef = useRef<any>(null);

    const labelFormatter = (params: any) => {
        if (params?.data?.name === 'Free') {
            return '';
        }
        // '% {c}'
        return `${params.percent}%`;
    };

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = chartRef.current.getEchartsInstance();
            chartInstance.setOption({
                title: {
                    show: false
                },
                legend: {
                    bottom: 0,
                    left: 'center',
                    data: [...legendData, "Free"],
                    selectedMode: selectedMode
                },
                series: [
                    {
                        type: 'pie',
                        radius: '55%',
                        data: adjustData(data),
                        selectedMode: selectedMode, // Enable single selection mode
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
                    }
                ]
            });
        }
    }, [data]);

    const adjustData = (data: any[]) => {
        let sum = data.reduce((acc, item) => acc + item.value, 0);
        if (sum < 100) {
            data.push({
                name: 'Free',
                value: 100 - sum,
                itemStyle: {
                    color: '#b7b7b7'
                }
            });
        }
        return data;
    };

    const handleChartClick = (params: any) => {
        const chartInstance = chartRef.current.getEchartsInstance();
        // Deselect all series
        chartInstance.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: null
        });
        // Select the clicked series
        chartInstance.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex
        });
    };

    return (
        <ReactECharts
            ref={chartRef}
            option={{}}
            onEvents={{
                click: handleChartClick
            }}
        />
    );
};

export default CustomPieChart;