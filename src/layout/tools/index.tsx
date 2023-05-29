import styles from './index.module.scss'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import { Link } from 'react-router-dom'

export default function Tools() {
    const menuList: MenuProps['items'] = [
        {
            key: 'home',
            label: <Link to="/home">首页</Link>
        },
        {
            type: 'divider'
        },
        {
            key: 'logut',
            label: <Link to="/login">退出登录</Link>,
            danger: true
        }
    ]

    return (
        <div className={styles.user}>
            <Dropdown menu={{ items: menuList }} placement="bottom" arrow={{ pointAtCenter: true }}>
                <div>
                    <Avatar size={28} icon={<SvgIcon name="ant-design:user-outlined" />} />
                    wulays
                </div>
            </Dropdown>
        </div>
    )
}
