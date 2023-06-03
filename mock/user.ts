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
    }
] as MockMethod[]
