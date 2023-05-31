import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import useSystemStore from '@/store/modules/system.ts'
import type { ECharts } from 'echarts'

interface Props {
    height: string
}

export default function Line(props: Props) {
    const chartRef = useRef(null)
    const systemStore = useSystemStore()

    const [chart, setChart] = useState<ECharts>()

    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                    focus: 'series'
                },
                markLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    data: [[{ type: 'min' }, { type: 'max' }]]
                }
            }
        ]
    }
    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current)
            chart?.setOption(options)
            setChart(chart)
            return () => {
                chart?.dispose()
            }
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            chart?.resize()
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [chart, systemStore.width])

    return <div ref={chartRef} style={{ height: props.height, width: '100%' }}></div>
}
