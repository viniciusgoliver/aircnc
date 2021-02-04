import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.1.50.55:3333'
})

export default api