import axios from 'axios'
export function request(config) {

    // return new Promise((resolve, reject) => {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66'
    })
    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err);
    })
    return instance(config)
    //     instance(config)
    //         .then(res => {
    //             resolve(res);
    //         })
    //         .catch(err => {
    //             reject(err);
    //         })
    // })
}
