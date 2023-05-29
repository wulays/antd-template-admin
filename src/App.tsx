import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from '@/router'
import { FC, useEffect } from 'react'
import useNProgress from '@/hooks/useNProgress.tsx'
import useSystemStore from '@/store/modules/system.ts'

const App: FC = () => {
    useNProgress()
    const { setWidth } = useSystemStore()

    useEffect(() => {
        setWidth(document.documentElement.clientWidth)
        window.onresize = () => {
            setWidth(document.documentElement.clientWidth)
        }
    }, [setWidth])

    return <RouterProvider router={router} />
}

export default App
