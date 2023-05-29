import styles from './index.module.scss'
import { Spin } from 'antd'

export default function LoadPage() {
    return (
        <div className={styles.warp}>
            <Spin />
        </div>
    )
}
