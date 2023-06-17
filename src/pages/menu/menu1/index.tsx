import { Outlet } from 'react-router-dom'

export default function Menu1() {
    return (
        <div style={{ backgroundColor: '#ffeeff', padding: '30px' }}>
            menu-1
            <Outlet />
        </div>
    )
}
