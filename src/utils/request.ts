import axios from 'axios'

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
        console.log(error)
    }
)

export default request
