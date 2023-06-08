import { useRef, forwardRef, useImperativeHandle, useState } from 'react'
import { Skeleton, Space } from 'antd'
import { Editor } from '@tinymce/tinymce-react'
import { Editor as TinyMCEEditor, RawEditorOptions } from 'tinymce'
import { useAnimate } from 'framer-motion'

type EditorConfig = RawEditorOptions & { selector?: undefined; target?: undefined }

interface Props {
    config?: EditorConfig
}

export interface EditorHandle {
    getContent: () => string | undefined
    setContent: (html: string) => void
    getEditor: () => TinyMCEEditor | null
}

export default forwardRef<EditorHandle, Props>(function (props, ref) {
    const editorRef = useRef<TinyMCEEditor | null>(null)

    const [loading, setLoading] = useState(true)

    useImperativeHandle(
        ref,
        () => ({
            getContent: () => editorRef.current?.getContent(),
            setContent: (html) => editorRef.current?.setContent(html),
            getEditor: () => editorRef.current
        }),
        [editorRef]
    )

    const toolbar =
        'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat'

    const [scope, animate] = useAnimate()

    const defaultSetting: EditorConfig = {
        language_url: `${import.meta.env.BASE_URL}tinymce/langs/zh-Hans.js`,
        language: 'zh-Hans',
        min_height: 300,
        toolbar,
        branding: false,
        menubar: false,
        toolbar_mode: 'sliding',
        insertdatetime_formats: ['%Y年%m月%d日', '%H点%M分%S秒', '%Y-%m-%d', '%H:%M:%S'],
        init_instance_callback: () => {
            setLoading(false)
            animate(scope.current.elementRef.current, { opacity: [0, 1] })
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        zIndex: 9,
                        backgroundColor: '#fff',
                        overflow: 'hidden'
                    }}
                >
                    <Space>
                        {toolbar.split('|').map((_) => {
                            const toolList = _.trim().split(' ')
                            if (toolList.length > 1) {
                                return toolList.map((_) => (
                                    <Skeleton.Button active key={_} style={{ minWidth: 'auto', width: '34px' }} />
                                ))
                            }
                            return <Skeleton.Button active key={toolList[0]} style={{ width: '130px' }} />
                        })}
                    </Space>
                    <Skeleton.Button active block style={{ marginTop: '5px', height: '360px' }} />
                </div>
            )}
            <Editor
                ref={scope}
                tinymceScriptSrc={`${import.meta.env.BASE_URL}tinymce/tinymce.min.js`}
                onInit={(_, editor) => (editorRef.current = editor)}
                init={{ ...defaultSetting, ...props?.config }}
            />
        </div>
    )
})
