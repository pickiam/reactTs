
import { postConfEntity } from '../../model/postConf';

const createEmptyUser = (): postConfEntity => ({
    key: Math.random().toString(),
    name: 'dojo',
    age: '26',
    address: '山东烟台',
    imgList: [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        size: '500',
        type: 'png'
    }
]
})
const getPostConf = (pramas: any): Promise<Array<postConfEntity>> => {
    return Promise.resolve([createEmptyUser(), createEmptyUser()])
}

const getPostConfDetail = (pramas: any): Promise<postConfEntity> => {
    return Promise.resolve(createEmptyUser())
}

const deletePostConfData = (pramas: any):Promise<boolean> => {
    return Promise.resolve(true)
}
export const postConfAPI = {
    getPostConf,
    getPostConfDetail,
    deletePostConfData
}