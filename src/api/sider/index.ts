
const baseURL = 'https://www.baidu.com';

const menuItem =  [{path: '/introduction', name: '车辆介绍'}, {path: '/', name: '招聘信息'}, {path: '/customer', name: '客户评价'}] ;

const getSiderItem = () :Promise<Object> => {
    return Promise.resolve(menuItem)
}

export const siderAPI = {
    getSiderItem
}