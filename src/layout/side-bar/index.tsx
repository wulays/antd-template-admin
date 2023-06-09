import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import Icon from '@/components/SvgIcon'
import { Link, useLocation } from 'react-router-dom'
import type { RouteItem } from '@/router'
import { filterHiddenMenuItem } from '@/utils/route.tsx'

type MenuItem = Required<MenuProps>['items'][number]

interface Props {
    collapsMenu: boolean
    authMenu: RouteItem[]
    route: RouteItem
    defaultOpenKeys?: string[]
    onClick?: () => void
}

export default function SideBar(props: Props) {
    const location = useLocation()
    // 当前选中菜单项
    const selectKeys = [props.route?.meta?.activeMenu || location.pathname]

    // 生成后的菜单列表
    const menuList: MenuItem[] = createMenuItem(props.authMenu)

    // 路由生成菜单
    function createMenuItem(list: RouteItem[]): MenuItem[] {
        return filterHiddenMenuItem(list).map((item) => {
            const filterChild = item.children
            // 如果只有一个子元素同时
            if (filterChild && filterChild.length === 1 && !item.meta?.alwaysShow) {
                const child = filterChild[0]
                const path = child.path || item.path
                const icon = child.meta?.icon || item.meta?.icon
                const name = child.meta?.name || item.meta?.name
                return {
                    key: path || child.id || item.id,
                    label: path ? <Link to={path}>{name}</Link> : name,
                    icon: icon && <Icon name={icon} />
                } as MenuItem
            }
            return {
                key: item.path || item.id,
                label: !item.children && item.path ? <Link to={item.path}>{item.meta?.name}</Link> : item.meta?.name,
                icon: item.meta?.icon && <Icon name={item.meta?.icon} />,
                children: item.children && createMenuItem(filterChild as RouteItem[])
            } as MenuItem
        })
    }

    return (
        <Menu
            defaultOpenKeys={props.defaultOpenKeys}
            selectedKeys={selectKeys}
            mode="inline"
            inlineCollapsed={props.collapsMenu}
            items={menuList}
            style={{ border: 'none' }}
            onClick={props.onClick}
        />
    )
}
