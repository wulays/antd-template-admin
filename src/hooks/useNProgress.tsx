import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useNProgress() {
    const location = useLocation()

    useEffect(() => {
        NProgress.done()
        return () => {
            NProgress.start()
        }
    }, [location.pathname])
}
