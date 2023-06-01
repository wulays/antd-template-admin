import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import useSystemStore from '@/store/modules/system.ts'
import type { EChartsOption, ECharts } from 'echarts'

interface Props {
    height: string
    options: EChartsOption
}

export default function Funnel(props: Props) {
    const chartRef = useRef(null)
    const systemStore = useSystemStore()

    const [chart, setChart] = useState<ECharts>()

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current)
            chart?.setOption(props.options)
            setChart(chart)
            return () => {
                chart?.dispose()
            }
        }
    }, [props.options])

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
