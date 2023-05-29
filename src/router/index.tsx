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
                path: '/home',
                element: lazyLoad(() => import('../pages/home')),
                meta: { name: '主页', icon: 'ant-design:desktop-outlined' }
            },
            {
                meta: { name: '系统管理', icon: 'ant-design:tool-filled' },
                children: [
                    {
                        path: '/system/auth',
                        element: lazyLoad(() => import('@/pages/system/auth')),
                        meta: {
                            name: '权限管理',
                            icon: 'ant-design:to-top-outlined',
                            activeMenu: '/home',
                            hidden: true
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
                path: '/about',
                element: lazyLoad(() => import('@/pages/about')),
                meta: { name: '关于', icon: 'ant-design:meh-filled' }
            }
        ]
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/pages/login'))
    },
    {
        path: '*',
        element: <Page404 />
    }
]

const router = createBrowserRouter(routes as RouteObject[])

export default router
