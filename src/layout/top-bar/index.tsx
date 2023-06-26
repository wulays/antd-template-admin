import styles from './index.module.scss'
import SvgIcon from '@/components/SvgIcon'
import useSystemStore from '@/store/modules/system.ts'
import { Breadcrumb, Button, theme } from 'antd'
import Tools from '@/layout/tools'

interface Props {
    list: { title: string | undefined }[]
}

export default function TopBar(props: Props) {
    const systemStore = useSystemStore()

    const { token: tColor } = theme.useToken()

    return (
        <div className={styles.warp} style={{ borderColor: tColor.colorBorder }}>
            <div className={styles.breadcrumb}>
                <Button type="link" onClick={systemStore.toggleCollapsMenu} style={{ fontSize: 18, border: 'none' }}>
                    {systemStore.collapsMenu ? (
                        <SvgIcon name="ant-design:menu-fold-outlined" />
                    ) : (
                        <SvgIcon name="ant-design:menu-unfold-outlined" />
                    )}
                </Button>

                <Breadcrumb items={props.list} />
            </div>

            {(!systemStore.hasHeader || !systemStore.showHeader) && <Tools />}
        </div>
    )
}
