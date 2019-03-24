import { userEntity } from '../model';
import { actionTypes } from '../common/constants/actionTypes';


const createEmptyUser = (): userEntity => ({
    username: '',
    password: ''
})


export const userReducer = (state = createEmptyUser(), action) => {
    switch(action.type) {
        case actionTypes.SAVE_USER:
            return handleSaveUser(state, action.payload);
        case actionTypes.UPDATE_USER_FIELD:
            return handleChangeUser(state, action.payload);
        case actionTypes.CLEAR_USER:
            return handleClearUser(state, action.payload)
        
    }
    return state;
}

const handleSaveUser = (state: userEntity = createEmptyUser(), payload: any) => {
    return {
        ...state,
        ...payload
    }
}

const handleChangeUser = (state: userEntity = createEmptyUser(), payload: any) => {
    return {
        ...state,
        ...payload
    }
}

const handleClearUser = (state: userEntity = createEmptyUser(), payload: any ) => {
    return {
        ...state,
        ...payload
    }
}