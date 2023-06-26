import logo from '@/assets/images/logo-removebg.png'
import styles from './index.module.scss'
import classNames from 'classnames'
import useSystemStore from '@/store/modules/system.ts'

interface Props {
    className?: string
}

export default function Logo(props: Props) {
    const systemStore = useSystemStore()

    return (
        <div className={classNames([styles.logo, props.className])}>
            <img src={logo} alt="" />
            <span>{systemStore.appTitle}</span>
        </div>
    )
}
