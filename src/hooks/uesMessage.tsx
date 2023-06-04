import { message } from 'antd'
interface httpError {
    code: number
    message: string
}

function successMessage(msg: string) {
    message.success(msg)
}

function errorMessage<T>(e: T) {
    if (!(e instanceof Error)) {
        message.error((e as httpError).message)
    }
}

export default function useMessage() {
    return {
        successMessage,
        errorMessage
    }
}
