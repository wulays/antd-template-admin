import styles from './index.module.scss'

import SideBar from './side-bar'
import Header from './header'

import useSystemStore from '@/store/modules/system.ts'
import TopBar from '@/layout/top-bar'
import { Drawer } from 'antd'
import { matchRoutes, Outlet, useLocation } from 'react-router-dom'
import routes from '@/router'
import type { RouteItem } from '@/router'
import logo from '@/assets/images/logo.png'

export default function Layout() {
    const systemStore = useSystemStore()

    const location = useLocation()

    // 需要权限的路由
    const authRoutes = routes.routes.find((_) => _.path === '/')?.children || []
    // 当前匹配的路由列表
    const routeList = matchRoutes(authRoutes, location) || []
    // 当前路由
    const route = routeList?.find((_) => _.pathname === location.pathname)?.route as RouteItem

    // 面包屑
    const breadcrumbList = routeList.map((_) => {
        return { title: (_.route as RouteItem).meta?.name }
    })

    return (
        <div className={styles.warpper}>
            {systemStore.hasHeader && systemStore.showHeader && <Header />}
            <div className={styles.container}>
                <div className={`${styles['side-bar']} ${systemStore.collapsMenu ? styles.collapsed : ''}`}>
                    {systemStore.showHeader ? (
                        <SideBar collapsMenu={systemStore.collapsMenu} authMenu={authRoutes} route={route} />
                    ) : (
                        <Drawer
                            placement="left"
                            width={240}
                            headerStyle={{ display: 'none' }}
                            bodyStyle={{ padding: '10px 0px' }}
                            open={!systemStore.collapsMenu}
                            onClose={systemStore.toggleCollapsMenu}
                        >
                            <div className={styles.logo}>
                                <img src={logo} alt="" />
                            </div>
                            <SideBar
                                collapsMenu={false}
                                authMenu={authRoutes}
                                route={route}
                                onClick={systemStore.toggleCollapsMenu}
                            />
                        </Drawer>
                    )}
                </div>
                <div className={styles.main}>
                    <TopBar list={breadcrumbList} />
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
