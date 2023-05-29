import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import viteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
    return defineConfig({
        server: {
            open: true,
            port: 9753
        },
        plugins: [
            react(),
            viteCompression(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/')],
                symbolId: 'icon-[dir]-[name]'
            }),
            viteMockServe({
                localEnabled: command === 'serve'
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve('./src')
            }
        },
        build: {
            outDir: mode === 'production' ? 'dist' : `dist-${mode}`
        }
    })
}
