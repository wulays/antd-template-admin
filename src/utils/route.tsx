import { RouteItem } from '@/router'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

export interface IBreadcrumb {
    title: string | ReactElement | undefined
    menu?: {
        items: IBreadcrumb[]
    }
}

export function createBreadcrumb(_: { route: RouteItem }, isRecursion = false): IBreadcrumb {
    const title = _.route.meta?.name

    // 判断如果只是一次递归
    if (!isRecursion && title && _.route.children) {
        const list = _.route.children.filter((_) => !_.path?.includes(':'))
        return {
            title,
            menu: {
                items: list.map((route) => createBreadcrumb({ route }, true))
            }
        }
    }

    return {
        title: title && _.route.path ? <Link to={_.route.path}>{title}</Link> : title
    }
}
