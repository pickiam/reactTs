
const baseURL = 'https://www.baidu.com';

const menuItem ={ siderItem: [{path: '/', name: '柯南'}, {path: '/', name: '火影'}, {path: '/', name: '海贼王'}, {path: '/', name: '龙珠'}, {path: '/', name: '马龙白兰度'}, {path: '/', name: '阿尔帕西诺'}] };

const getSiderItem = () :Promise<Object> => {
    return Promise.resolve(menuItem)
}

export const siderAPI = {
    getSiderItem
}