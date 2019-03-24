import { actionTypes } from '../../../common/constants/actionTypes';
import { userEntity } from '../../../model';
import { userAPI } from '../../../api/user';

export const saveUserAction = (user: userEntity) => (dispatch) => {
    saveUser(user);
    dispatch(saveUserActionCompleted(user))
}

const saveUser = (user: userEntity) => {
    userAPI.saveUser(user).then(() => {
        console.log('hhh')
    }).catch(err => console.log(err))
}

const saveUserActionCompleted = (formValidationResult: any) => ({
    type: actionTypes.SAVE_USER,
    payload: formValidationResult, 
})