export const StateStorage = {
    setItem: (name: string, value: string) => {
        localStorage.setItem(name, window.btoa(value))
    },
    getItem: (name: string): string => {
        const data = localStorage.getItem(name)
        if (data) {
            return window.atob(data)
        }
        return ''
    },
    removeItem: (name: string) => {
        localStorage.removeItem(name)
    }
}
