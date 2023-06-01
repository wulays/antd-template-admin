import * as Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

function orderList(query) {
    return Mock.mock({
        [`data|${query.list}`]: [
            {
                id: '@guid()',
                name: '@cname()',
                price: '@float(1, 1000, 0, 2)',
                state: '@pick(["0", "1", "2"])'
            }
        ]
    })
}

export default [
    {
        url: '/api/order/list',
        method: 'get',
        timeout: 1000,
        response: ({ query }) => {
            const data = orderList(query).data
            return {
                code: 200,
                count: data.length,
                data
            }
        }
    }
] as MockMethod[]
