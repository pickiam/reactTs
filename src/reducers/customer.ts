import { actionTypes } from '../common/constants/actionTypes';
import { customerEntity } from '../model/customerEntity';
// import { imgList } from '../model/postConf'


interface State {
    tableData: customerEntity[],
    detailData: customerEntity
}
// const createImgEmpty = (): imgList => ({
//     uid: Math.random().toString(),
// })
const createEmpty = ():customerEntity => ({
    id: '0',
    customerName: '',
    customerIcon: '',
    customerEvaluation: '',
    fileList: []
})
export const customerReducer = (state: State = {tableData: [], detailData: createEmpty()}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CUSTOMER_DATA:
        return handleData(state, action.payload)
        case actionTypes.FETCH_CUSTOMER_DETAIL:
        return handleData(state, action.payload)
        case actionTypes.FETCH_CUSTOMER_DETAIL_CLEAR:
        return handleData(state, createEmpty())
    }
    return state;
}

const handleData = (state: State = {tableData: [], detailData: createEmpty()}, payload: any) => {
    if ((<customerEntity[]>payload).length) {
        state.tableData = payload
    } else {
        state.detailData = payload
    }
    return {
        ...state
    }
    
}