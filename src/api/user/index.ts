import request from '@/utils/request.ts'

export function login(data: userLoginReqType) {
    return request<userLoginResType>({
        url: '/api/user/login',
        method: 'post',
        data
    })
}

export function getAuth(params?: userAuthReqType) {
    return request<userAuthResType>({
        url: '/api/user/auth',
        method: 'get',
        params
    })
}
