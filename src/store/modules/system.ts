import { create } from 'zustand'
interface IStore {
    width: number
    hasHeader: boolean
    showHeader: boolean
    setWidth: (width: number) => void
    collapsMenu: boolean
    toggleCollapsMenu: () => void
}

const useSystemStore = create<IStore>((set) => ({
    width: 0,
    hasHeader: true,
    showHeader: true,
    collapsMenu: false,

    setWidth: (width) =>
        set(() => {
            let collapsMenu = false,
                showHeader = true
            if (width <= 500) {
                showHeader = false
                collapsMenu = true
            } else if (width <= 1000) {
                collapsMenu = true
            }
            return { width, collapsMenu, showHeader }
        }),
    toggleCollapsMenu: () => set((state) => ({ collapsMenu: !state.collapsMenu }))
}))

export default useSystemStore
