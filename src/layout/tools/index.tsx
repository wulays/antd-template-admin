import styles from './index.module.scss'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import { Link, useNavigate } from 'react-router-dom'
import useUserStore from '@/store/modules/user.ts'
import useSystemStore from '@/store/modules/system.ts'

export default function Tools() {
    const userStore = useUserStore()
    const systemStore = useSystemStore()
    const navigate = useNavigate()

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
            label: '退出登录',
            danger: true,
            onClick: () => {
                userStore.logout()
                navigate('/login')
            }
        }
    ]

    return (
        <div className={styles.user}>
            <div className={styles.theme}>
                <SvgIcon
                    style={{ fill: systemStore.themeMode === 'dark' ? '#fff' : systemStore.themeOption?.colorPrimary }}
                    name={`theme-${systemStore.themeMode}`}
                    onClick={() => systemStore.changeThemeMode(systemStore.themeMode)}
                />
            </div>
            <Dropdown menu={{ items: menuList }} placement="bottom" arrow={{ pointAtCenter: true }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size={28} icon={<SvgIcon name="ant-design:user-outlined" />} />
                    {userStore.userName}
                </div>
            </Dropdown>
        </div>
    )
}
