import type { MockMethod } from 'vite-plugin-mock'

function userList() {
    return [
        {
            userId: '1',
            userName: 'wulays',
            realName: '一二三',
            password: '123456',
            avatar: '',
            token: 'fake-token-1',
            roles: ['admin']
        },
        {
            userId: '2',
            userName: 'test',
            realName: 'tet',
            password: 'test',
            avatar: '',
            token: 'fake-token-2',
            homepath: '/dashboard',
            roles: ['test']
        }
    ]
}

function roleList() {
    return [
        {
            token: 'fake-token-1',
            auth: ['system:manage', 'system:auth', 'system:user', 'system:user:add', 'menu', 'menu:1', 'menu:1:1']
        },
        {
            token: 'fake-token-2',
            auth: ['system:manage', 'system:auth', 'menu', 'menu:1']
        }
    ]
}

export default [
    {
        url: '/antd-template-admin/api/user/login',
        method: 'post',
        response: ({ body }) => {
            const user = userList().find((user) => user.userName === body.username)

            if (!user) {
                return {
                    message: '用户不存在！',
                    code: 401
                }
            } else if (user.password !== body.password) {
                return {
                    message: '用户名或密码错误！',
                    code: 401
                }
            }
            return {
                code: 200,
                data: user
            }
        }
    },
    {
        url: '/antd-template-admin/api/user/auth',
        method: 'get',
        response: ({ headers, query }) => {
            const token = query.token || headers.token
            if (!token) {
                return {
                    code: 401,
                    message: '登录信息失效！'
                }
            }
            return {
                code: 200,
                data: roleList().find((_) => _.token === token)
            }
        }
    }
] as MockMethod[]
