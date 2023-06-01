interface orderReqType {
    page: number
    list?: number
}

interface orderResType {
    code: number
    msg: string
    count: number
    page: number
    data: {
        orderId: string
        name: string
        price: number
        state: string
    }
}
