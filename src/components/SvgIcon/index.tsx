import { Icon } from '@iconify/react'
import type { CSSProperties } from 'react'
import classNames from 'classnames'

interface Props {
    name: string
    className?: string
    style?: CSSProperties
}

export default function SvgIcon(props: Props) {
    return props.name.indexOf('ant-design:') === 0 ? (
        <Icon className={classNames(['anticon', props.className])} style={props.style} icon={props.name} />
    ) : (
        <svg
            className={classNames(['anticon', props.className])}
            width="1em"
            height="1em"
            aria-hidden="true"
            style={props.style}
        >
            <use xlinkHref={`#icon-${props.name}`} />
        </svg>
    )
}
