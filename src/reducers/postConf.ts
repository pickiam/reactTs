import { actionTypes } from '../common/constants/actionTypes';
import { postConfEntity } from '../model/postConf';
import { imgList } from '../model/postConf'


interface State {
    tableData: postConfEntity[],
    detailData: postConfEntity
}
const createImgEmpty = (): imgList => ({
    uid: Math.random().toString(),
})
const createEmpty = ():postConfEntity => ({
    key: '',
    name: '',
    age: '',
    address: '',
    imgList: [createImgEmpty()]
})
export const postConfReducer = (state: State = {tableData: [], detailData: createEmpty()}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POST_CONF_DATA:
        return handleData(state, action.payload)
        case actionTypes.FETCH_POST_CONF_DETAIL:
        return handleData(state, action.payload)
        case actionTypes.FETCH_POST_CONF_DETAIL_CLEAR:
        return handleData(state, createEmpty())
    }
    return state;
}

const handleData = (state: State = {tableData: [], detailData: createEmpty()}, payload: any) => {
    if ((<postConfEntity[]>payload).length) {
        state.tableData = payload
    } else {
        state.detailData = payload
    }
    return {
        ...state
    }
    
}