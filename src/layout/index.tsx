import styles from './index.module.scss'

import SideBar from './side-bar'
import Header from './header'

import useSystemStore from '@/store/modules/system.ts'
import TopBar from '@/layout/top-bar'
import Tags from '@/layout/tag-view'
import { Drawer, theme } from 'antd'
import { matchRoutes, Outlet, useLocation, useNavigate } from 'react-router-dom'
import routes from '@/router'
import type { RouteItem } from '@/router'
import Logo from './logo'

import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import useUserStore from '@/store/modules/user.ts'
import classNames from 'classnames'
import { createBreadcrumb, filterNotAuthRoute } from '@/utils/route.tsx'
import useRouteStore from '@/store/modules/route.ts'

export default function Layout() {
    const systemStore = useSystemStore()
    const routeStore = useRouteStore()
    const userStore = useUserStore()

    const location = useLocation()
    const navigate = useNavigate()
    const { token: tColor } = theme.useToken()

    // 当前匹配的路由列表
    const routeList = matchRoutes(routes.routes, location) || []

    // 当前路由
    const route = routeList?.find((_) => _.pathname === location.pathname)?.route as RouteItem

    // 面包屑
    const breadcrumbList = routeList.map(({ route }) => createBreadcrumb(route))

    const [scope, animate] = useAnimate()

    useEffect(() => {
        const timer = setTimeout(() => {
            userStore.loadAuth()
        })
        return () => {
            clearTimeout(timer)
        }
    }, [userStore.loadAuth])

    useEffect(() => {
        if (route.children) {
            const authRoute = filterNotAuthRoute(route.children, userStore.auth)
            // 判断是否有子集有则显示第一个
            navigate(authRoute[0].path || userStore.homepath || '/')
            return
        }
        animate('div', { opacity: [0, 1], filter: ['blur(1px)', 'blur(0px)'] })
    }, [route])

    return (
        <div className={styles.warpper}>
            {systemStore.hasHeader && systemStore.showHeader && <Header />}
            <div
                className={classNames([styles.container, { [styles['has-header']]: systemStore.hasHeader }])}
                style={{ backgroundColor: tColor.colorBgContainer }}
            >
                <div
                    className={`${styles['side-bar']} ${systemStore.collapsMenu ? styles.collapsed : ''}`}
                    style={{ backgroundColor: tColor.colorBgBase, borderColor: tColor.colorBorder }}
                >
                    {systemStore.showHeader ? (
                        <>
                            {!systemStore.hasHeader && systemStore.hasLogo && <Logo className={styles.logo} />}
                            <SideBar
                                collapsMenu={systemStore.collapsMenu}
                                authMenu={routeStore.routeList}
                                defaultOpenKeys={routeList.slice(0, -1).map((_) => _.pathname)}
                                route={route}
                            />
                        </>
                    ) : (
                        <Drawer
                            placement="left"
                            width={240}
                            headerStyle={{ display: 'none' }}
                            bodyStyle={{ padding: '10px 0px' }}
                            open={!systemStore.collapsMenu}
                            onClose={systemStore.toggleCollapsMenu}
                        >
                            {systemStore.hasLogo && <Logo className={styles.logo} />}
                            <SideBar
                                collapsMenu={false}
                                authMenu={routeStore.routeList}
                                route={route}
                                defaultOpenKeys={routeList.slice(0, -1).map((_) => _.pathname)}
                                onClick={systemStore.toggleCollapsMenu}
                            />
                        </Drawer>
                    )}
                </div>
                <div className={styles.main}>
                    <div
                        className={systemStore.headerFixed ? styles['nav-bar'] : ''}
                        style={{ backgroundColor: tColor.colorBgBase, borderColor: tColor.colorBorder }}
                    >
                        <TopBar list={breadcrumbList} />
                        {systemStore.hasTagView && <Tags route={route} />}
                    </div>
                    <div ref={scope} className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
