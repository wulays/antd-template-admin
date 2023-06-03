import type { ReactNode } from 'react'
import { matchRoutes, useLocation, Navigate } from 'react-router-dom'
import useUserStore from '@/store/modules/user.ts'
import routes, { RouteItem } from '@/router'

interface Props {
    children: ReactNode
}

export default function Guard(props: Props) {
    const location = useLocation()
    // 当前匹配的路由列表
    const routeList = (matchRoutes(routes.routes, location) || []).map((_) => _.route) as RouteItem[]
    const route = routeList.find((_) => _.path === location.pathname)

    const userStore = useUserStore()

    if (userStore.token) {
        // 如果是登录页
        if (location.pathname === '/login') {
            return <Navigate to="/" replace />
        }
        // 判断当前路由是否有权限
        if (
            !routeList.every((route) => !route.meta?.auth || userStore.roles.some((_) => route.meta?.auth?.includes(_)))
        ) {
            return <Navigate to="/404" replace />
        }
        return <>{props.children}</>
    } else {
        // 如果没有token 同时不是白名单
        if (!route?.meta?.white) {
            return <Navigate to="/login" replace />
        }
        return <>{props.children}</>
    }
}
