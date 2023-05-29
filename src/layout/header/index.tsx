import styles from './index.module.scss'
import Tools from '@/layout/tools'
import useSystemStore from '@/store/modules/system.ts'

import logo from '@/assets/images/logo.png'

export default function Header() {
    const systemStore = useSystemStore()

    return (
        <div className={styles.warp}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            {systemStore.hasHeader && <Tools />}
        </div>
    )
}
