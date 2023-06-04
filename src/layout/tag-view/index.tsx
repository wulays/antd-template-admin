import styles from './index.module.scss'
import { RouteItem } from '@/router'
import useSystemStore from '@/store/modules/system.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import classNames from 'classnames'
import SvgIcon from '@/components/SvgIcon'

interface Props {
    route: RouteItem
}

export default function Tags(props: Props) {
    const systemStore = useSystemStore()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (props.route.meta?.name) {
            systemStore.setTagView({ path: location.pathname, title: props.route.meta?.name })
        }
    }, [location.pathname])

    // 处理移除标签
    const handleRemoveTag = useCallback(
        (path: string) => {
            systemStore.removeTagView(path)
            if (systemStore.tagView.length <= 1) {
                navigate('/')
            } else if (location.pathname === path) {
                const tagView = systemStore.tagView.filter((_) => _.path !== path)
                navigate(tagView[tagView.length - 1].path)
            }
        },
        [systemStore.tagView, location.pathname]
    )

    const handleGoToPage = useCallback((path: string) => {
        navigate(path)
    }, [])

    return (
        <div className={styles.container}>
            {systemStore.tagView.map((tag) => (
                <span
                    className={classNames([styles.tag, location.pathname === tag.path ? styles.active : ''])}
                    key={tag.path}
                    onClick={() => handleGoToPage(tag.path)}
                >
                    {tag.title}
                    <SvgIcon
                        name="ant-design:close-outlined"
                        onClick={(ev) => {
                            ev.stopPropagation()
                            handleRemoveTag(tag.path)
                        }}
                    />
                </span>
            ))}
        </div>
    )
}
