import { actionTypes } from '../../../common/constants/actionTypes';
import { userEntity } from '../../../model';

export const userFieldChangeAction = (user: userEntity, fieldName: string, value: string) => (dispatch) => {
    dispatch(userFieldChangeCompleted(user, fieldName, value))
}

const userFieldChangeCompleted = (user: userEntity, fieldName: string, value: string) => ({
    type: actionTypes.UPDATE_USER_FIELD,
    payload: { fieldName: value }
})