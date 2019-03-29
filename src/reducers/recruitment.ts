import { actionTypes } from '../common/constants/actionTypes';
import { recruitmentEntity } from '../model/recruitmentEntity';
// import { imgList } from '../model/postConf'


interface State {
    tableData: recruitmentEntity[],
    detailData: recruitmentEntity
}
// const createImgEmpty = (): imgList => ({
//     uid: Math.random().toString(),
// })
const createEmpty = ():recruitmentEntity => ({
    id: '0',
    position: '',
    address: '',
    responsibility: '',
    requirement: '',
    link: ''
})
export const recruitmentReducer = (state: State = {tableData: [], detailData: createEmpty()}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RECRUITMENT_DATA:
        return handleData(state, action.payload)
        case actionTypes.FETCH_RECRUITMENT_DETAIL:
        return handleData(state, action.payload)
        case actionTypes.FETCH_RECRUITMENT_DETAIL_CLEAR:
        return handleData(state, createEmpty())
    }
    return state;
}

const handleData = (state: State = {tableData: [], detailData: createEmpty()}, payload: any) => {
    if ((<recruitmentEntity[]>payload).length >= 0) {
        state.tableData = payload
    } else {
        state.detailData = payload
    }
    return {
        ...state
    }
    
}