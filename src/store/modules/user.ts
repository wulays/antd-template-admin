import { create } from 'zustand'
import { login } from '@/api/user'
import useMessage from '@/hooks/uesMessage.tsx'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface Store extends userLoginResType {
    setName: (username: string) => void
    setInfo: (info: userLoginResType) => void
    login: (params: userLoginReqType) => Promise<userLoginResType>
    logout: () => void
}

const initState = (): userLoginResType => {
    return {
        userId: 0,
        userName: '',
        realName: '',
        avatar: '',
        roles: []
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
                            // 如果记住密码
                            if (params.remember) {
                                data.pd = atob(params.password)
                            }
                            set(() => data)
                            return data
                        } catch (e) {
                            errorMessage(e)
                            return Promise.reject(e)
                        }
                    },
                    logout: () => {
                        return set(() => {
                            useUserStore.persist.clearStorage()
                            return initState()
                        })
                    }
                }
            },
            {
                name: 'userInfo',
                storage: createJSONStorage(() => localStorage)
            }
        )
    )
)

export default useUserStore
