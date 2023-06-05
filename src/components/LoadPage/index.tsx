import styles from './index.module.scss'
import { Spin } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

interface Props {
    progress?: boolean
}

export default function LoadPage(props: Props) {
    useEffect(() => {
        if (props.progress) {
            NProgress.start()
            return () => {
                NProgress.done()
            }
        }
    }, [])

    return (
        <div className={styles.warp}>
            <Spin />
        </div>
    )
}
