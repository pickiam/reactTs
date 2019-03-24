import { actionTypes } from '../../../common/constants/actionTypes';


export const changeSiderItem = (item: any) => (dispatch) => {
    dispatch({
        type: actionTypes.CHANGE_SLIDER_ITEM,
        payload: { activeMenuItem: item.item.props.children }
    })
}