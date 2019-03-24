import { actionTypes } from '../common/constants/actionTypes';
import{ siderEnitity } from '../model/siderEnitity'

const createEmptyEnitity = (): siderEnitity => ({
    siderItem: [],
    activeMenuItem: ''
})

export const siderReducer = (state: siderEnitity = createEmptyEnitity(), action) => {
  switch (action.type) {
    case actionTypes.GET_SIDER_ITEM:
      return handleMenuItem(state, action.payload);
    case actionTypes.CHANGE_SLIDER_ITEM:
      return handleMenuItem(state, action.payload)
  }
  return state;
};

const handleMenuItem = (state: siderEnitity = createEmptyEnitity() , payload) => {
    return {
        ...state,
        ...payload
    }
}