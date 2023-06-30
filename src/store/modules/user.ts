import { create } from 'zustand'
import { notification } from '@/components/EscapeAntd'
import { getAuth, login } from '@/api/user'
import useMessage from '@/hooks/uesMessage.tsx'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import useSystemStore from '@/store/modules/system.ts'
import { StateStorage } from '@/utils/auth.ts'
import { getHelloTime } from '@/utils'
import useRouteStore from '@/store/modules/route.ts'
import { createAuthRoute } from '@/utils/route.tsx'
import routes from '@/router'

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
                const systemStore = useSystemStore.getState()
                const routeStore = useRouteStore.getState()

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
                            notification.success({
                                message: `${getHelloTime()}好！`,
                                description: `欢迎回来 ${params.username}`,
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
                            // useSystemStore.persist.clearStorage()
                            return initState()
                        })
                    },
                    loadAuth: async () => {
                        try {
                            systemStore.changeLoadPage(true)
                            const {
                                data: { auth }
                            } = await getAuth()
                            systemStore.changeLoadPage(false)

                            routeStore.setRouteList(createAuthRoute(routes.routes, auth))
                            set(() => ({ auth }))
                            return auth
                        } catch (e) {
                            systemStore.changeLoadPage(false)
                            errorMessage(e)
                            return Promise.reject(e)
                        }
                    }
                }
            },
            {
                name: window.btoa('userState'),
                storage: createJSONStorage(() => StateStorage)
            }
        ),
        {
            name: 'userState'
        }
    )
)

export default useUserStore
