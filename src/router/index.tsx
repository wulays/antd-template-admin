import { createHashRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { createElement, lazy, Suspense } from 'react'
import LoadPage from '@/components/LoadPage'
import Guard from '@/router/Guard.tsx'

function lazyLoad<T extends () => Promise<{ default: React.ComponentType }>>(src: T) {
    return (
        <Suspense fallback={<LoadPage progress />}>
            <Guard>{createElement(lazy(src))}</Guard>
        </Suspense>
    )
}

const Layout = lazyLoad(() => import('@/layout'))
const Page401 = lazyLoad(() => import('../pages/error/401.tsx'))
const Page404 = lazyLoad(() => import('../pages/error/404.tsx'))

export declare interface RouteItem extends Omit<RouteObject, 'children'> {
    meta?: {
        name?: string
        icon?: string
        hidden?: boolean
        activeMenu?: string
        alwaysShow?: boolean
        white?: boolean
        auth?: userAuth[]
    }
    children?: RouteItem[]
}

const routes: RouteItem[] = [
    {
        path: '/',
        element: Layout,
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
        element: Layout,
        meta: { name: '系统管理', icon: 'ant-design:tool-filled', auth: ['system:manage'], alwaysShow: true },
        children: [
            {
                path: '/system/auth',
                element: lazyLoad(() => import('@/pages/system/auth')),
                meta: {
                    name: '权限管理',
                    icon: 'ant-design:to-top-outlined',
                    auth: ['system:auth']
                }
            },
            {
                path: '/system/user',
                element: lazyLoad(() => import('@/pages/system/user')),
                meta: {
                    name: '用户管理',
                    icon: 'ant-design:user-outlined',
                    auth: ['system:user']
                }
            },
            {
                path: '/system/add-user/:id',
                element: lazyLoad(() => import('@/pages/system/user/add-user')),
                meta: {
                    name: '新增用户',
                    hidden: true,
                    auth: ['system:user:add']
                }
            }
        ]
    },
    {
        path: '/menu',
        element: Layout,
        meta: { name: '菜单管理', icon: 'ant-design:appstore-add-outlined', auth: ['menu'] },
        children: [
            {
                path: '/menu/menu1',
                element: lazyLoad(() => import('@/pages/menu/menu1')),
                meta: { name: '菜单1', alwaysShow: true, auth: ['menu:1'] },
                children: [
                    {
                        path: '/menu/menu1/menu1-1',
                        element: lazyLoad(() => import('@/pages/menu/menu1/menu1-1.tsx')),
                        meta: { name: '菜单1-1', auth: ['menu:1:1'] }
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
        path: '/',
        element: Layout,
        meta: { name: '富文本', icon: 'ant-design:edit-filled', auth: ['menu'] },
        children: [
            {
                path: '/editor',
                element: lazyLoad(() => import('@/pages/editor')),
                meta: { name: '富文本', icon: 'ant-design:edit-filled' }
            }
        ]
    },
    {
        path: '/',
        element: Layout,
        meta: { name: 'Markdown', icon: 'ant-design:edit-filled', auth: ['menu'] },
        children: [
            {
                path: '/markdown',
                element: lazyLoad(() => import('@/pages/markdown')),
                meta: { name: 'Markdown', icon: 'ant-design:read-filled' }
            }
        ]
    },
    {
        path: 'https://github.com/wulays',
        meta: { name: '外链', icon: 'ant-design:select-outlined' }
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/pages/login')),
        meta: { hidden: true, white: true }
    },
    {
        path: '/401',
        element: Page401,
        meta: { hidden: true, white: true }
    },
    {
        path: '*',
        element: Page404,
        meta: { hidden: true, white: true }
    }
]

const router = createHashRouter(routes as RouteObject[])

export default router
