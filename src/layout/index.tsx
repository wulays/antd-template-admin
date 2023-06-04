import styles from './index.module.scss'

import SideBar from './side-bar'
import Header from './header'

import useSystemStore from '@/store/modules/system.ts'
import TopBar from '@/layout/top-bar'
import Tags from '@/layout/tag-view'
import { Drawer } from 'antd'
import { matchRoutes, Outlet, useLocation, useNavigate } from 'react-router-dom'
import routes from '@/router'
import type { RouteItem } from '@/router'
import logo from '@/assets/images/logo.png'

import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import useUserStore from '@/store/modules/user.ts'

export default function Layout() {
    const systemStore = useSystemStore()
    const userStore = useUserStore()

    const location = useLocation()
    const navigate = useNavigate()

    // 当前匹配的路由列表
    const routeList = matchRoutes(routes.routes, location) || []
    // 当前路由
    const route = routeList?.find((_) => _.pathname === location.pathname)?.route as RouteItem

    // 面包屑
    const breadcrumbList = routeList.map((_) => {
        return { title: (_.route as RouteItem).meta?.name }
    })

    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (route.children) {
            // 判断是否有子集有则显示第一个
            navigate(route.children[0].path || userStore.homepath || '/')
            return
        }
        animate('div', { opacity: [0, 1] })
    }, [route])

    return (
        <div className={styles.warpper}>
            {systemStore.hasHeader && systemStore.showHeader && <Header />}
            <div className={styles.container}>
                <div className={`${styles['side-bar']} ${systemStore.collapsMenu ? styles.collapsed : ''}`}>
                    {systemStore.showHeader ? (
                        <SideBar
                            collapsMenu={systemStore.collapsMenu}
                            authMenu={routes.routes}
                            defaultOpenKeys={routeList.slice(0, -1).map((_) => _.pathname)}
                            route={route}
                        />
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
                                <span>Antd Admin Template</span>
                            </div>
                            <SideBar
                                collapsMenu={false}
                                authMenu={routes.routes}
                                route={route}
                                defaultOpenKeys={routeList.slice(0, -1).map((_) => _.pathname)}
                                onClick={systemStore.toggleCollapsMenu}
                            />
                        </Drawer>
                    )}
                </div>
                <div className={styles.main}>
                    <TopBar list={breadcrumbList} />
                    <Tags route={route} />
                    <div ref={scope} className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
