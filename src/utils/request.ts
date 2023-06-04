import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 30
})

request.interceptors.request.use(
    (config) => {
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

export default request
