import Editor from '@/components/TinyMCE'
import type { EditorHandle } from '@/components/TinyMCE'
import { useRef } from 'react'
import { Button, Alert } from 'antd'
import styles from './index.module.scss'

export default function EditorPage() {
    const editorRef = useRef<EditorHandle>(null)

    const handleClickLog = () => {
        alert(editorRef.current?.getContent())
    }

    return (
        <div className={styles.container}>
            <Alert
                style={{ marginBottom: '15px' }}
                message="这里富文本选用 TinyMCE，找了很多了，好像这个还是比较合适"
                type="info"
            />
            <Editor ref={editorRef} />
            <div style={{ marginTop: '15px' }}>
                <Button type="primary" onClick={handleClickLog}>
                    打印文本内容
                </Button>
            </div>
        </div>
    )
}
