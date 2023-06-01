import request from '@/utils/request.ts'

export function getOrderList(params: orderReqType) {
    return request<any, { data: orderResType[] }>({
        url: '/api/order/list',
        method: 'get',
        params
    })
}
