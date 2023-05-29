import { Link } from 'react-router-dom'
export default function User() {
    return (
        <div>
            用户管理
            <Link to="/system/auth">权限管理</Link>
        </div>
    )
}
