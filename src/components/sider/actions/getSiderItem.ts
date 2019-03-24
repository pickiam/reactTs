import { actionTypes } from '../../../common/constants/actionTypes';

import { siderAPI } from '../../../api/sider'

export const getSiderItemData = () => (dispatch) => {
    siderAPI.getSiderItem().then((res) => {
        dispatch({
            type: actionTypes.GET_SIDER_ITEM,
            payload: res
        })
    })
}