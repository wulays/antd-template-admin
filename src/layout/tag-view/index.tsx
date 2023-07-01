import styles from './index.module.scss'
import { RouteItem } from '@/router'
import useSystemStore from '@/store/modules/system.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { theme, Tabs } from 'antd'

interface Props {
    route: RouteItem
}

export default function Tags(props: Props) {
    const systemStore = useSystemStore()
    const location = useLocation()
    const navigate = useNavigate()

    const { token: tColor } = theme.useToken()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (props.route.meta?.name) {
                systemStore.setTagView({
                    path: location.pathname,
                    title: props.route.meta?.name,
                    notDelTag: props.route.meta.notDelTag
                })
            }
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [location.pathname])

    // 处理移除标签
    const handleRemoveTag = (path: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
        if (action === 'add' || typeof path !== 'string') return
        systemStore.removeTagView(path)
        if (systemStore.tagView.length <= 1) {
            navigate('/')
        } else if (location.pathname === path) {
            const tagView = systemStore.tagView.filter((_) => _.path !== path)
            navigate(tagView[0].path)
        }
    }

    const handleGoToPage = (path: string) => {
        navigate(path)
    }

    return (
        <div className={styles.container} style={{ borderColor: tColor.colorBorder }}>
            <Tabs
                type="editable-card"
                className={styles.tag}
                hideAdd
                activeKey={location.pathname}
                onChange={handleGoToPage}
                onEdit={handleRemoveTag}
                items={systemStore.tagView.map((tag) => {
                    return {
                        label: tag.title,
                        key: tag.path,
                        closable: !tag.notDelTag
                    }
                })}
            />
        </div>
    )
}
