export function getHelloTime(): string {
    const hours = new Date().getHours()
    if (hours > 6 && hours < 12) {
        return '早上'
    } else if (hours < 15) {
        return '中午'
    } else if (hours < 19) {
        return '下午'
    }
    return '晚上'
}
