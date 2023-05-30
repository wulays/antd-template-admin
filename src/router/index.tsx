import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '@/layout'
import Page404 from '@/pages/404'
import { createElement, lazy, Suspense } from 'react'
import LoadPage from '@/components/LoadPage'
function lazyLoad<T extends () => Promise<{ default: React.ComponentType }>>(src: T) {
    return <Suspense fallback={<LoadPage />}>{createElement(lazy(src))}</Suspense>
}

export declare interface RouteItem extends Omit<RouteObject, 'children'> {
    meta?: {
        name?: string
        icon?: string
        hidden?: boolean
        activeMenu?: string
    }
    children?: RouteItem[]
}

const routes: RouteItem[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/dashboard',
                meta: { name: '主页', icon: 'ant-design:desktop-outlined' },
                element: lazyLoad(() => import('@/pages/dashboard'))
            }
        ]
    },
    {
        path: '/system',
        element: <Layout />,
        meta: { name: '系统管理', icon: 'ant-design:tool-filled' },
        children: [
            {
                path: '/system/auth',
                element: lazyLoad(() => import('@/pages/system/auth')),
                meta: {
                    name: '权限管理',
                    icon: 'ant-design:to-top-outlined'
                }
            },
            {
                path: '/system/user',
                element: lazyLoad(() => import('@/pages/system/user')),
                meta: {
                    name: '用户管理',
                    icon: 'ant-design:user-outlined'
                }
            }
        ]
    },
    {
        path: '/menu',
        element: <Layout />,
        meta: { name: '菜单管理', icon: 'ant-design:appstore-add-outlined' },
        children: [
            {
                path: '/menu/menu1',
                element: lazyLoad(() => import('@/pages/menu/menu1')),
                meta: { name: '菜单1' },
                children: [
                    {
                        path: '/menu/menu1/menu1-1',
                        element: lazyLoad(() => import('@/pages/menu/menu1/menu1-1.tsx')),
                        meta: { name: '菜单1-1' }
                    },
                    {
                        path: '/menu/menu1/menu1-2',
                        element: lazyLoad(() => import('@/pages/menu/menu1/menu1-2.tsx')),
                        meta: { name: '菜单1-2' }
                    }
                ]
            },
            {
                path: '/menu/menu2',
                element: lazyLoad(() => import('@/pages/menu/menu2')),
                meta: { name: '菜单2' }
            }
        ]
    },
    {
        path: 'https://github.com/wulays',
        meta: { name: '外部连接', icon: 'ant-design:github-outlined' }
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/pages/login')),
        meta: { hidden: true }
    },
    {
        path: '*',
        element: <Page404 />,
        meta: { hidden: true }
    }
]

const router = createBrowserRouter(routes as RouteObject[])

export default router
