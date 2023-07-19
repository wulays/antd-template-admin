interface orderReqType {
    page: number
    list?: number
}

interface orderResType {
    orderId: string
    name: string
    price: number
    state: string
}
