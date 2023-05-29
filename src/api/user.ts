import request from '@/utils/request.js'

export function login<T>(data: T) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data
    })
}
