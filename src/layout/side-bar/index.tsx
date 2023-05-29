import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import Icon from '@/components/SvgIcon'
import { Link } from 'react-router-dom'
import type { RouteItem } from '@/router'

type MenuItem = Required<MenuProps>['items'][number]

interface Props {
    collapsMenu: boolean
    authMenu: RouteItem[]
    route: RouteItem
    onClick?: () => void
}

export default function SideBar(props: Props) {
    // 当前选中菜单项
    const selectKeys = [props.route?.meta?.activeMenu || location.pathname]

    // 生成后的菜单列表
    const menuList: MenuItem[] = createMenuItem(filterMenuItem(props.authMenu))

    // 过滤隐藏项
    function filterMenuItem(list: RouteItem[]): RouteItem[] {
        return list.filter((_) => {
            return !_?.meta?.hidden
        })
    }
    // 路由生成菜单
    function createMenuItem(list: RouteItem[]): MenuItem[] {
        return list.map((item) => {
            return {
                key: item.path || item.id,
                label: item.path ? <Link to={item.path}>{item.meta?.name}</Link> : item.meta?.name,
                icon: item.meta?.icon && <Icon name={item.meta?.icon} />,
                children: item.children && createMenuItem(filterMenuItem(item.children))
            } as MenuItem
        })
    }

    return (
        <Menu
            selectedKeys={selectKeys}
            mode="inline"
            inlineCollapsed={props.collapsMenu}
            items={menuList}
            style={{ border: 'none' }}
            onClick={props.onClick}
        />
    )
}
