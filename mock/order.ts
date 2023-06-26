import * as Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

function orderList(list) {
    return Mock.mock({
        [`data|${list}`]: [
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
        url: '/antd-template-admin/api/order/list',
        method: 'get',
        timeout: 1000,
        response: ({ query }) => {
            const total = 42
            let num = total - query.page * query.list
            num = num < 0 ? num + 10 : 10

            console.log(query.page)
            const data = orderList(num).data
            return {
                code: 200,
                total,
                data
            }
        }
    }
] as MockMethod[]
