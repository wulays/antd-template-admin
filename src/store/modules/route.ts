import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import type { RouteItem } from '@/router/index.tsx'

interface IStore {
    routeList: RouteItem[]
    setRouteList: (list: RouteItem[]) => void
}

const useRouteStore = create<IStore>()(
    devtools(
        (set) => ({
            routeList: [],
            setRouteList: (list) => set({ routeList: list })
        }),
        {
            name: 'routeState'
        }
    )
)

export default useRouteStore
