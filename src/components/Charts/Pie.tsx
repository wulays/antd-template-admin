import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import useSystemStore from '@/store/modules/system.ts'
import type { ECharts } from 'echarts'

interface Props {
    height: string
}

export default function Pie(props: Props) {
    const chartRef = useRef(null)
    const systemStore = useSystemStore()

    const [chart, setChart] = useState<ECharts>()

    const options = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
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
        chart?.resize()
    }, [chart, systemStore.width])

    return <div ref={chartRef} style={{ height: props.height }}></div>
}
