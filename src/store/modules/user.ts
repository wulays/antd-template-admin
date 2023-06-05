import { create } from 'zustand'
import { notification } from '@/components/EscapeAntd'
import { getAuth, login } from '@/api/user'
import useMessage from '@/hooks/uesMessage.tsx'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import useSystemStore from '@/store/modules/system.ts'

interface Store extends userLoginResType, userAuthResType {
    setName: (username: string) => void
    setInfo: (info: userLoginResType) => void
    login: (params: userLoginReqType) => Promise<userLoginResType>
    logout: () => void
    loadAuth: () => void
}

const initState = (): userLoginResType & userAuthResType => {
    return {
        userId: 0,
        token: '',
        userName: '',
        realName: '',
        avatar: '',
        roles: [],
        auth: []
    }
}

const useUserStore = create<Store>()(
    devtools(
        persist(
            (set) => {
                const { errorMessage } = useMessage()

                return {
                    ...initState(),
                    setName: (userName) => set(() => ({ userName })),
                    setInfo: (info) => set(() => info),
                    login: async (params) => {
                        try {
                            const { data } = await login(params)
                            const {
                                data: { auth }
                            } = await getAuth({ token: data.token })
                            // 如果记住密码
                            if (params.remember) {
                                data.pd = atob(params.password)
                            }
                            set(() => ({ ...data, auth }))
                            notification.success({
                                message: `欢迎回来 ${params.username}！`,
                                duration: 2
                            })
                            return data
                        } catch (e) {
                            errorMessage(e)
                            return Promise.reject(e)
                        }
                    },
                    logout: () => {
                        return set(() => {
                            useUserStore.persist.clearStorage()
                            useSystemStore.persist.clearStorage()
                            return initState()
                        })
                    },
                    loadAuth: async () => {
                        try {
                            const {
                                data: { auth }
                            } = await getAuth()
                            set(() => ({ auth }))
                            return auth
                        } catch (e) {
                            errorMessage(e)
                            return Promise.reject(e)
                        }
                    }
                }
            },
            {
                name: 'userInfo',
                storage: createJSONStorage(() => localStorage)
            }
        ),
        {
            name: 'userInfo'
        }
    )
)

export default useUserStore
