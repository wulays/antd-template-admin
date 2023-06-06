import styles from './index.module.scss'
import Tools from '@/layout/tools'
import useSystemStore from '@/store/modules/system.ts'

import Logo from '@/layout/logo'

export default function Header() {
    const systemStore = useSystemStore()

    return (
        <div className={styles.warp}>
            <div>{systemStore.hasLogo && <Logo />}</div>
            {systemStore.hasHeader && <Tools />}
        </div>
    )
}
