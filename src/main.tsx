import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:svg-icons-register'
import App from './App.tsx'
import 'antd/dist/reset.css'
import './index.css'
import '@/styles/index.scss'
import { setupProdMockServer } from './mockProdServer.ts'

if (import.meta.env.VITE_BUILD_MOCK === 'true') {
    setupProdMockServer()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
