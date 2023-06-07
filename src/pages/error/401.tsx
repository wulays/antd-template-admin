import { Button } from 'antd'

import styles from './404.module.scss'

import img401 from '@/assets/images/error/401.svg'
import { useNavigate } from 'react-router-dom'

export default function Page403() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <img src={img401} alt="" />
            <div className={styles.content}>
                <h4>OOPS!</h4>
                <span>你没有权限进入该页面 ~!</span>
                <p>请检查您输入的网址是否正确，或点击下方按钮返回首页！</p>
                <Button type="primary" onClick={() => navigate('/')}>
                    返回首页
                </Button>
            </div>
        </div>
    )
}
