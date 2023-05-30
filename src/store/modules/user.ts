import { create } from 'zustand'
import { login } from '@/api/user'
import useMessage from '@/hooks/uesMessage.tsx'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import type { userLoginReqType, userLoginResType } from '@/api/user/type.ts'

interface Store extends userLoginResType {
    setName: (username: string) => void
    setInfo: (info: userLoginResType) => void
    login: (params: userLoginReqType) => Promise<userLoginResType>
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
