import { Icon } from '@iconify/react'
import type { CSSProperties } from 'react'

interface Props {
    name: string
    style?: CSSProperties
}

export default function SvgIcon(props: Props) {
    return props.name.indexOf('ant-design:') === 0 ? (
        <Icon className="anticon" style={props.style} icon={props.name} />
    ) : (
        <svg className="anticon" width="1em" height="1em" aria-hidden="true" style={props.style}>
            <use xlinkHref={`#icon-${props.name}`} />
        </svg>
    )
}
