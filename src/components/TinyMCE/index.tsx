import { forwardRef, useImperativeHandle } from 'react'
import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Editor as TinyMCEEditor, RawEditorOptions } from 'tinymce'

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

    useImperativeHandle(
        ref,
        () => ({
            getContent: () => editorRef.current?.getContent(),
            setContent: (html) => editorRef.current?.setContent(html),
            getEditor: () => editorRef.current
        }),
        [editorRef]
    )

    const defaultSetting: EditorConfig = {
        language_url: `${import.meta.env.BASE_URL}tinymce/langs/zh-Hans.js`,
        language: 'zh-Hans',
        min_height: 300,
        toolbar:
            'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link image media table insertdatetime searchreplace | preview code fullscreen',
        branding: false,
        menubar: false,
        toolbar_mode: 'sliding',
        insertdatetime_formats: ['%Y年%m月%d日', '%H点%M分%S秒', '%Y-%m-%d', '%H:%M:%S']
    }

    return (
        <>
            <Editor
                tinymceScriptSrc={`${import.meta.env.BASE_URL}tinymce/tinymce.min.js`}
                onInit={(_, editor) => (editorRef.current = editor)}
                init={{ ...defaultSetting, ...props?.config }}
            />
        </>
    )
})
