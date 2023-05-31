import styles from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import Chart from '@/components/Charts'
import { Table } from 'antd'
import { barOption, FunnelOption, LineOption, PieOption, barOption2 } from './chart-options.ts'

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
        { id: 1, el: <Chart options={PieOption()} height="300px" /> },
        { id: 2, el: <Chart options={barOption()} height="300px" /> },
        { id: 3, el: <Chart options={FunnelOption()} height="300px" /> }
    ]

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }
    ]

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }
    ]

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
                <Chart options={LineOption()} height="280px" />
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
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
                <div className={styles.chart}>
                    <div>
                        <Chart options={barOption2()} height="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
