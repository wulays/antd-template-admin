import styles from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import Line from '@/components/Charts/Line.tsx'
import Pie from '@/components/Charts/Pie.tsx'
import Bar from '@/components/Charts/Bar.tsx'
import Funnel from '@/components/Charts/Funnel.tsx'

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
        { id: 1, el: <Pie height="280px" /> },
        { id: 2, el: <Bar height="280px" /> },
        { id: 3, el: <Funnel height="280px" /> }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.panelWarp}>
                {panelList.map((panel) => (
                    <div className={styles.panel} key={panel.id}>
                        <SvgIcon className={styles.icon} name={panel.icon} />
                        <div>
                            <span>{panel.title}</span>
                            <p>{panel.num.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.lineChart}>
                <Line height="280px" />
            </div>

            <div className={styles.cardChart}>
                {cardList.map((chart) => (
                    <div className={styles.card} key={chart.id}>
                        <div style={{ backgroundColor: '#fff', padding: '0 15px' }}>{chart.el}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
