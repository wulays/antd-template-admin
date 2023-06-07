import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from '@/router'
import { FC, useEffect } from 'react'
import useSystemStore from '@/store/modules/system.ts'
import { App as AntdApp, ConfigProvider } from 'antd'
import EscapeAntd from '@/components/EscapeAntd.tsx'
import LoadPage from '@/components/LoadPage'

const App: FC = () => {
    const { setWidth, gbLoadPage } = useSystemStore()

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.onresize = () => {
            setWidth(document.documentElement.clientWidth)
        }
    }, [setWidth])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00a7e6'
                }
            }}
        >
            <AntdApp>
                <EscapeAntd />
                {gbLoadPage && <LoadPage />}
                <RouterProvider router={router} />
            </AntdApp>
        </ConfigProvider>
    )
}

export default App
