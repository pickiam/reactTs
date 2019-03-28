import { actionTypes } from '../../../common/constants/actionTypes';
import { customerAPI } from '../../../api/recruitment'
import { getCusomerData } from './getData'
export const getDetail = (pramas: any) => (dispatch) => {
    customerAPI.getcustomerDetail(pramas).then((res) => {
        dispatch({
            type: actionTypes.FETCH_RECRUITMENT_DETAIL,
            payload: res
        })
    })
}
export const getDetailClear = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_RECRUITMENT_DETAIL_CLEAR
    })
}

export const deleteData = (pramas: any) => (dispatch) => {
    customerAPI.deletecustomer(pramas).then((res) => {
        dispatch(getCusomerData())
    })
}