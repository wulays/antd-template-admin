import styles from './index.module.scss'
import { Spin } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

export default function LoadPage() {
    useEffect(() => {
        NProgress.start()
        return () => {
            NProgress.done()
        }
    }, [])

    return (
        <div className={styles.warp}>
            <Spin />
        </div>
    )
}
