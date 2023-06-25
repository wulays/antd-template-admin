import styles from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import Chart from '@/components/Charts'
import { Table, Tag } from 'antd'
import { barOption, FunnelOption, LineOption, PieOption, barOption2 } from './chart-options.ts'
import { useOrderList } from '@/api/order'
import cardBg from '@/assets/images/dashboard/cover.png'
import { motion } from 'framer-motion'

export default function Home() {
    const panelList = [
        {
            id: 1,
            title: '用户',
            icon: 'ant-design:user-outlined',
            num: 544
        },
        {
            id: 2,
            title: '产品',
            icon: 'ant-design:down-square-outlined',
            num: 223
        },
        {
            id: 3,
            title: '金额',
            icon: 'ant-design:money-collect-outlined',
            num: 49299
        },
        {
            id: 4,
            title: '订单',
            icon: 'ant-design:reconciliation-filled',
            num: 3435
        }
    ]

    const cardList = [
        { id: 1, el: <Chart options={PieOption} height="300px" /> },
        { id: 2, el: <Chart options={barOption} height="300px" /> },
        { id: 3, el: <Chart options={FunnelOption} height="300px" /> }
    ]

    const tableState: {
        [key: string]: string
    } = {
        '0': 'error',
        '1': 'success',
        '2': 'processing'
    }

    const tableCol = [
        {
            title: '订单ID',
            dataIndex: 'id'
        },
        {
            title: '价格',
            dataIndex: 'price'
        },
        {
            title: '状态',
            dataIndex: 'state',
            render: (state: string) => <Tag color={tableState[state]}>{tableState[state]}</Tag>
        }
    ]

    const { data, isLoading: tableLoad } = useOrderList({ page: 1, list: 10 })

    return (
        <div className={styles.container}>
            <div className={styles.panelWarp}>
                {panelList.map((panel) => (
                    <div className={styles.panel} key={panel.id}>
                        <div>
                            <SvgIcon className={styles.icon} name={panel.icon} />
                            <div>
                                <span>{panel.title}</span>
                                <p>{panel.num.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.lineChart}>
                <Chart options={LineOption} height="280px" />
            </div>

            <div className={styles.cardChart}>
                {cardList.map((chart) => (
                    <div className={styles.card} key={chart.id}>
                        <div style={{ backgroundColor: '#fff', padding: '15px' }}>{chart.el}</div>
                    </div>
                ))}
            </div>

            <div className={styles.cardChart}>
                <div className={styles.table}>
                    <div>
                        <Table
                            dataSource={data?.data}
                            columns={tableCol}
                            rowKey="id"
                            size="small"
                            loading={tableLoad}
                        />
                    </div>
                </div>
                <div className={styles.chart}>
                    <div className={styles.cardBg}>
                        <div>
                            <motion.div
                                animate={{
                                    y: [-20, -50, -20]
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                    repeat: Infinity
                                }}
                            >
                                <img src={cardBg} alt="" />
                            </motion.div>
                            <span>Antd Admin Template</span>
                        </div>
                    </div>
                    <div>
                        <Chart options={barOption2} height="200px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
