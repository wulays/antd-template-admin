import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

export default function useNProgress() {
    useEffect(() => {
        NProgress.start()
    }, [])

    useEffect(() => {
        return () => {
            NProgress.done()
        }
    })
}
