import { Radio } from 'antd'
import type { RadioChangeEvent } from 'antd'
import useUserStore from '@/store/modules/user.ts'

export default function Auth() {
    const userStore = useUserStore()

    const handleAuthChange = (ev: RadioChangeEvent) => {
        useUserStore.setState(() => ({ token: ev.target.value }))
        userStore.loadAuth()
    }

    return (
        <div>
            <div>权限切换</div>
            <Radio.Group defaultValue={userStore.token} buttonStyle="solid" onChange={handleAuthChange}>
                <Radio.Button value="fake-token-1">admin</Radio.Button>
                <Radio.Button value="fake-token-2">test</Radio.Button>
            </Radio.Group>
        </div>
    )
}
