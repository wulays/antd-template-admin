import { useRef, useState } from 'react'
import { Button, Divider, Space, Tour } from 'antd'
import type { TourProps } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import styles from './index.module.scss'

export default function TourPage() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const [open, setOpen] = useState(false)

    const steps: TourProps['steps'] = [
        {
            title: '上传文件',
            description: '把你的文件放在这里.',
            cover: (
                <img
                    alt="tour.png"
                    src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
                />
            ),
            target: () => ref1.current
        },
        {
            title: '保存',
            description: '保存更改.',
            target: () => ref2.current
        },
        {
            title: '其他操作',
            description: '点击查看其他操作.',
            target: () => ref3.current
        }
    ]

    return (
        <div className={styles.container}>
            <Button type="primary" onClick={() => setOpen(true)}>
                开始指引
            </Button>

            <Divider />

            <Space>
                <Button ref={ref1}> 上传</Button>
                <Button ref={ref2} type="primary">
                    保存
                </Button>
                <Button ref={ref3} icon={<SvgIcon name="ant-design:ellipsis-outlined" />} />
            </Space>

            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
        </div>
    )
}
