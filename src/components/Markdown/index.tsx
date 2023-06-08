import Vditor from 'vditor'
import 'vditor/dist/index.css'
import './index.module.scss'
import { useEffect, useRef } from 'react'

export default function VditorMarkdown() {
    const vditorRef = useRef(null)

    useEffect(() => {
        if (vditorRef.current) {
            new Vditor(vditorRef.current, {
                value: '',
                placeholder: '在这里书写 Markdown',
                preview: {
                    theme: {
                        current: 'ant-design',
                        list: { 'ant-design': 'Ant Design', dark: 'Dark', light: 'Light', wechat: 'WeChat' }
                    },
                    parse(element: HTMLElement) {
                        console.log(element)
                    }
                },
                cache: {
                    enable: false
                }
            })
        }
    }, [])

    return <div ref={vditorRef}></div>
}
