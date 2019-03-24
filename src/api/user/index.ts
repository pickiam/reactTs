import { userEntity } from '../../model';

const baseURL = 'https://www.baidu.com';


const saveUser = (user: userEntity) :Promise<boolean> => {
    return Promise.resolve(true)
}

export const userAPI = {
    saveUser,
}