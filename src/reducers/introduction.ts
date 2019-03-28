import { actionTypes } from '../common/constants/actionTypes';
import { introductionEntity } from '../model/introductionEntity';
// import { imgList } from '../model/postConf'


interface State {
    tableData: introductionEntity[],
    detailData: introductionEntity
}
// const createImgEmpty = (): imgList => ({
//     uid: Math.random().toString(),
// })
const createEmpty = ():introductionEntity => ({
    id: '0',
    Title: '',
    BackGround: '',
    Content: '',
    fileList: []
})
export const introductionReducer = (state: State = {tableData: [], detailData: createEmpty()}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_INTRODUCTION_DATA:
        return handleData(state, action.payload)
        case actionTypes.FETCH_INTRODUCTION_DETAIL:
        return handleData(state, action.payload)
        case actionTypes.FETCH_INTRODUCTION_DETAIL_CLEAR:
        return handleData(state, createEmpty())
    }
    return state;
}

const handleData = (state: State = {tableData: [], detailData: createEmpty()}, payload: any) => {
    if ((<introductionEntity[]>payload).length) {
        state.tableData = payload
    } else {
        state.detailData = payload
    }
    return {
        ...state
    }
    
}