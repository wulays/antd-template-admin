import styles from './index.module.scss'
import VditorMarkdown from '@/components/Markdown'

export default function MarkdownPage() {
    return (
        <div className={styles.container}>
            <VditorMarkdown />
        </div>
    )
}
