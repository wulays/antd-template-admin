import { Button } from 'antd'

import styles from './index.module.scss'

import img404 from '@/assets/images/404/404.svg'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <img src={img404} alt="" />
            <div className={styles.content}>
                <h4>OOPS!</h4>
                <span>页面好像走丢了 ~!</span>
                <p>请检查您输入的网址是否正确，或点击下方按钮返回首页！</p>
                <Button type="primary" onClick={() => navigate('/')}>
                    返回首页
                </Button>
            </div>
        </div>
    )
}
