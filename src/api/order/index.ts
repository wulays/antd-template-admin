import useRequest from '@/hooks/useRequest.ts'

export function useOrderList(params: orderReqType) {
    return useRequest<{ data: orderResType[]; total: number }>({
        url: '/api/order/list',
        method: 'get',
        params
    })
}
