import styles from './index.module.scss'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import { Link } from 'react-router-dom'
import useUserStore from '@/store/modules/user.ts'

export default function Tools() {
    const userStore = useUserStore()

    const menuList: MenuProps['items'] = [
        {
            key: 'dashboard',
            label: <Link to={userStore.homepath || '/'}>首页</Link>
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size={28} icon={<SvgIcon name="ant-design:user-outlined" />} />
                    {userStore.userName}
                </div>
            </Dropdown>
        </div>
    )
}
