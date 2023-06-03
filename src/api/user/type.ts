// 用户登录请求类型
interface userLoginReqType {
    username: string
    password: string
    remember: boolean
}

// 用户登录响应类型
interface userLoginResType {
    userId: string | number
    token: string
    userName: string
    realName?: string
    avatar?: string
    homepath?: string
    pd?: string
    roles: userAuth[]
}
