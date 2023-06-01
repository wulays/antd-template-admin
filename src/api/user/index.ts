import request from '@/utils/request.ts'

export function login(data: userLoginReqType) {
    return request<any, { data: userLoginResType }>({
        url: '/api/user/login',
        method: 'post',
        data
    })
}
