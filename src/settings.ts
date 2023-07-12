export declare interface ISettings {
    app: {
        appTitle: string
        lazyProgress: boolean
        enableDynamicTitle: true
        themeMode: 'light' | 'dark'
    }
    header: {
        hasHeader: boolean
        hasTagView: boolean
        hasLogo: boolean
        hasBreadcrumb: boolean
        fixed: boolean
    }
}

const globalSettings: ISettings = {
    app: {
        appTitle: import.meta.env.VITE_APP_TITLE || 'Antd Template Admin',
        lazyProgress: true,
        enableDynamicTitle: true,
        themeMode: 'light'
    },
    header: {
        hasHeader: false,
        hasTagView: true,
        hasBreadcrumb: false,
        hasLogo: true,
        fixed: false
    }
}

export default globalSettings
