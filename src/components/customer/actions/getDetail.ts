import { actionTypes } from '../../../common/constants/actionTypes';
import { customerAPI } from '../../../api/customer'
import { getCusomerData } from './getData'
export const getDetail = (pramas: any) => (dispatch) => {
    customerAPI.getcustomerDetail(pramas).then((res) => {
        dispatch({
            type: actionTypes.FETCH_CUSTOMER_DETAIL,
            payload: res
        })
    })
}
export const getDetailClear = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_CUSTOMER_DETAIL_CLEAR
    })
}

export const deleteData = (pramas: any) => (dispatch) => {
    customerAPI.deletecustomer(pramas).then((res) => {
        dispatch(getCusomerData())
    })
}