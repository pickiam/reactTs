import axios from 'axios'
import { BaseUrl } from './env'
axios.defaults.baseURL = BaseUrl;
axios.interceptors.response.use((res):any => {
    return res
}, (err) => {
    return Promise.reject(err)
})
export default axios;
