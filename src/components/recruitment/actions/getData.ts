import { actionTypes } from '../../../common/constants/actionTypes';
import { customerAPI } from '../../../api/recruitment'

export const getCusomerData = (pramas?: any) => (dispatch) => {
    customerAPI.getcustomerData(pramas).then((res) => {
        dispatch({
            type: actionTypes.FETCH_RECRUITMENT_DATA,
            payload: res
        })
    }).catch((err) => console.log(err))
}
export const updateData = (pramas?: any) => (dispatch) => {
    customerAPI.getcustomerUpdate(pramas).then((res) => {
       dispatch(getCusomerData())
    }).catch((err) => console.log(err))
}
export const addData = (pramas?: any) => (dispatch) => {
    customerAPI.getcustomerAdd(pramas).then((res) => {
        dispatch(getCusomerData())
    }).catch((err) => console.log(err))
}