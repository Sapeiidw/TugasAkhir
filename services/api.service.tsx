import axios, { AxiosRequestConfig } from "axios"
import { storageService } from ".";

const main = axios.create({
    baseURL: 'https://api-dev.inposery.com/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

main.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const userToken = storageService.getToken() || ''
    config.headers = {
        'Authorization': userToken,
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default main