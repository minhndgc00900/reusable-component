import axios from 'axios'

const instance = axios.create({
    // baseURL: process.env.REACT_APP_SAVVY,
    baseURL: '',
    headers: {
        Accept:'applications/json',
        'Content-Type': 'application/json'
    }
});

// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

const getRequest = (path: string = '', param: Object = {}, instanceObj = instance) => {
    return instanceObj.get<Array<string>>(path, param);
        // .then(res => res)
        // .catch(err => Promise.reject(err.response ? err.response.data : err));
}

const postRequest = (path = '', body = {}, instanceObj = instance) => {
    return instanceObj.post(path, body)
    .then(res => res.data )
    .catch(err => Promise.reject(err.response ? err.response.data : err))
}

export const requestService = { getRequest, postRequest };