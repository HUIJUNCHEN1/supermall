import { request } from '@/network/request';
export function gethomemulti() {
    return request({
        url: '/home/multidata'
    })
}

export function gethomegood(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}