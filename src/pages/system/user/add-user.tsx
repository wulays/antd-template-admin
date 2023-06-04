import { useParams } from 'react-router-dom'

export default function AddUser() {
    const params = useParams()

    return <div>新增用户{params.id}</div>
}
