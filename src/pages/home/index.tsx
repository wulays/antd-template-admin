import styles from './index.module.scss'
import useUserStore from '@/store/modules/user.ts'

export default function Home() {
    const userStore = useUserStore()

    console.log(userStore.userName)

    return <div className={styles.container}>首页</div>
}
