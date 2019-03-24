import { actionTypes } from '../../../common/constants/actionTypes';
import { postConfAPI } from '../../../api/postConf'
import { getPostConfData } from './getPostConfData'
export const getPostConfDetail = (pramas: any) => (dispatch) => {
    postConfAPI.getPostConfDetail(pramas).then((res) => {
        dispatch({
            type: actionTypes.FETCH_POST_CONF_DETAIL,
            payload: res
        })
    })
}
export const getPostConfDetailClear = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_POST_CONF_DETAIL_CLEAR
    })
}

export const deletePostConfData = (pramas: any) => (dispatch) => {
    postConfAPI.deletePostConfData(pramas).then((res) => {
        getPostConfData()
    })
}