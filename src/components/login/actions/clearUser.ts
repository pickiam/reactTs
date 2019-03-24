import { actionTypes } from '../../../common/constants/actionTypes' 
import { userEntity }  from '../../../model'

export const clearUserAction = () => (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_USER })
}

// const clearUserActionCompleted = () => ({
//     type: actionTypes.CLEAR_USER
// })