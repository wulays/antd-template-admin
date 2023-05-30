import request from '@/utils/request.ts'
import type { userLoginReqType, userLoginResType } from '@/api/user/type.ts'

export function login(data: userLoginReqType) {
    return request<any, { data: userLoginResType }>({
        url: '/api/user/login',
        method: 'post',
        data
    })
}
