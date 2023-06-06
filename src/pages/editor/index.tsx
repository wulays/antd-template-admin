import Editor from '@/components/TinyMCE'
import type { EditorHandle } from '@/components/TinyMCE'
import { useCallback, useRef } from 'react'
import { Button } from 'antd'
export default function EditorPage() {
    const editorRef = useRef<EditorHandle>(null)

    const handleClickLog = useCallback(() => {
        alert(editorRef.current?.getContent() || '啥也没有输入')
    }, [editorRef])

    return (
        <div>
            <Editor ref={editorRef} />
            <Button type="primary" onClick={handleClickLog}>
                打印文本内容
            </Button>
        </div>
    )
}
