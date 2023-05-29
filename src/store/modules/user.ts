import { create } from 'zustand'
import { login } from '@/api/user.ts'
import useMessage from '@/hooks/uesMessage.tsx'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

type RoleInfo = 'super' | 'test'

export interface userLoginType {
    username: string
    password: string
    remember: boolean
}

export interface userInfoType {
    userId: string | number
    userName: string
    realName?: string
    avatar?: string
    homepath?: string
    pd?: string
    roles: RoleInfo[]
}

interface Store extends userInfoType {
    setName: (username: string) => void
    setInfo: (info: userInfoType) => void
    login: (params: userLoginType) => Promise<userInfoType>
}

const useUserStore = create<Store>()(
    devtools(
        persist(
            (set) => {
                const { errorMessage } = useMessage()

                return {
                    userId: 0,
                    userName: '',
                    realName: '',
                    avatar: '',
                    roles: [],
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
