import { actionTypes } from '../../../common/constants/actionTypes';
import { postConfAPI } from '../../../api/postConf'

export const getPostConfData = (pramas?: any) => (dispatch) => {
    postConfAPI.getPostConf(pramas).then((res) => {
        dispatch({
            type: actionTypes.FETCH_POST_CONF_DATA,
            payload: res
        })
    })
}