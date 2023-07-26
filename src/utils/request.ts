import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { message } from '@/components/EscapeAntd'
import useUserStore from '@/store/modules/user.ts'

interface IResponse {
    code: string
    msg: string
}

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 30
})

request.interceptors.request.use(
    (config) => {
        const { token } = useUserStore.getState()
        if (token) {
            config.headers['token'] = token
        }

        return config
    },
    (error) => {
        console.log(error)
    }
)

request.interceptors.response.use(
    (response) => {
        const data = response.data

        if (![200].includes(data.code)) {
            return Promise.reject(data)
        }
        return data
    },
    (error) => {
        message.error(error.message)
        return Promise.reject(error)
    }
)

export default function <T>(params: AxiosRequestConfig): Promise<T & IResponse> {
    return request(params)
}
