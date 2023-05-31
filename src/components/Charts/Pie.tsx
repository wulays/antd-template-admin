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
            top: '0%',
            left: 'center'
        },
        series: [
            {
                top: 30,
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
        const timer = setTimeout(() => {
            chart?.resize()
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [chart, systemStore.width])

    return <div ref={chartRef} style={{ height: props.height, width: '100%' }}></div>
}
