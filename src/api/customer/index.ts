import  axios from '../axios'
import { customerEntity } from '../../model/customerEntity';

const customerListUrl =  '/evaluation/list'
const customerDetailUrl =  '/evaluation/find'
const customerAddUrl =  '/evaluation/add'
const customerDeleteUrl =  '/evaluation/delete'
const customerUpdateUrl =  '/evaluation/update'

const createEmptycustomer = (): customerEntity => ({
//     key: Math.random().toString(),
//     name: 'dojo',
//     age: '26',
//     address: '山东烟台',
//     imgList: [
//     {
//         uid: '-1',
//         name: 'xxx.png',
//         status: 'done',
//         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//         size: '500',
//         type: 'png'
//     }
// ]
       id: '1',
       customerName: 'dojo',
       customerIcon: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
       customerEvaluation: `1.hahaahaaahah1.hahaahaaahah`,
       fileList: [
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
const getcustomerData = (pramas: any): Promise<Array<customerEntity>> | any => {
    return new Promise((resolve, reject) => {
        axios.get(customerListUrl, {params: pramas}).then((res) => {
            if (res.data.success) {
                return resolve(res.data.data)
            } else {
                return reject(res.data.text)
            }
        }).catch((err) => {return reject(err)})
    })
    
}

const getcustomerDetail = (pramas: any): Promise<customerEntity> | any => {
    return new Promise ((resolve, reject) => {
        axios.get(customerDetailUrl, {params: {id: pramas}}).then((res) => {
            if (res.data.success) {
                return resolve(res.data.data)
            } else {
                return reject(res.data.text)
            }
        }).catch((err) => reject(err))
    })
}
const getcustomerAdd = (pramas: any): Promise<boolean> | any => {
    return new Promise ((resolve, reject) => {
        axios.post(customerAddUrl, pramas).then((res) => {
            if (res.data.success) {
                return resolve(res)
            } else {
                return reject(res.data.text)
            }
        }).catch((err) => reject(err))
    })
    
}
const getcustomerUpdate = (pramas: any): Promise<boolean> | any => {
    return new Promise ((resolve, reject) => {
        axios.put(customerUpdateUrl, pramas).then((res) => {
            return resolve(res)
        }).catch((err) => reject(err))
    })
    
}

const deletecustomer = (pramas: any):Promise<boolean> | any => {
    return new Promise ((resolve, reject) => {
        axios.delete(customerDeleteUrl, {params: {id: pramas}}).then(res => {
            if (res.data.success) {
                return resolve(res.data.success)
            } else {
                return reject(res.data.text)
            }
        }).catch((err) => reject(err))
    })
    
}
export const customerAPI = {
    getcustomerData,
    getcustomerDetail,
    deletecustomer,
    getcustomerAdd,
    getcustomerUpdate
}