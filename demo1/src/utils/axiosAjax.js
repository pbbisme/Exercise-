import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://10.1.30.140/contract-web/';

axios.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error)
})

function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        if (typeof (response.data) === 'string')
            return JSON.parse(response.data);
        else
            return response.data
        // if (+response.data.code === 0){ return response}
        // else throw new Error(response.data.message) // eslint-disable-line
    }
    throw new Error(response.statusText) // eslint-disable-line
}

export function request(config) {
    return axios.request(config).then(checkStatus)
}

export function get(url, params) {
    return axios.get(url, {
        params
    }).then(checkStatus)
}

export function post(url, data, config) {
    return axios.post(url, data, config).then(checkStatus)
}
