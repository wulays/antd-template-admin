const globalSettings = {
    app: {
        appTitle: import.meta.env.VITE_APP_TITLE || 'Antd Template Admin',
        lazyProgress: true,
        enableDynamicTitle: true
    },
    header: {
        hasHeader: false,
        hasTagView: true,
        hasLogo: true,
        fixed: false
    }
}

export default globalSettings
