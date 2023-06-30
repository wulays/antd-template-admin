import { RouteItem } from '@/router'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

export interface IBreadcrumb {
    title: string | ReactElement | undefined
    menu?: {
        items: IBreadcrumb[]
    }
}

export function createBreadcrumb(route: RouteItem, isRecursion = false): IBreadcrumb {
    const title = route.meta?.name

    // 判断如果只是一次递归
    if (!isRecursion && title && route.children) {
        const list = route.children.filter((_) => !_.path?.includes(':'))
        return {
            title,
            menu: {
                items: list.map((route) => createBreadcrumb(route, true))
            }
        }
    }

    return {
        title: title && route.path ? <Link to={route.path}>{title}</Link> : title
    }
}

// 过滤隐藏项
export function filterMenuItem(list: RouteItem[], auth: userAuthResType['auth']): RouteItem[] {
    return list.filter((_) => {
        // 如果不隐藏菜单栏同时有权限
        return !_?.meta?.hidden && (!_.meta?.auth || auth.some((role) => _.meta?.auth?.includes(role)))
    })
}

// 处理生成路由
export function createAuthRoute(list: RouteItem[], auth: userAuthResType['auth']): RouteItem[] {
    return filterMenuItem(list, auth).map((item) => {
        if (item.children) {
            return {
                ...item,
                children: createAuthRoute(item.children, auth)
            }
        }
        return item
    })
}
