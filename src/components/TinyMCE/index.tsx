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
}

export default forwardRef<EditorHandle, Props>(function (props, ref) {
    const editorRef = useRef<TinyMCEEditor | null>(null)

    useImperativeHandle(
        ref,
        () => ({
            getContent: () => editorRef.current?.getContent()
        }),
        [editorRef]
    )

    const defaultSetting: EditorConfig = {
        language_url: 'tinymce/langs/zh-Hans.js',
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
                tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                onInit={(_, editor) => (editorRef.current = editor)}
                init={{ ...defaultSetting, ...props?.config }}
            />
        </>
    )
})
