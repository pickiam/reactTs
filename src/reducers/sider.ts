import { actionTypes } from '../common/constants/actionTypes';
import{ siderEnitity, menuItemLabelType } from '../model/siderEnitity'

const createEmptyEnitity = (): siderEnitity => ({
    siderItem: [],
    activeMenuItem: {}
})
const createPatch = (pramas, pathName) => {
    for (let index of pramas) {
      if (index.path === pathName) {
       return index
      }
    }
  }
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
    if (Array.isArray(payload)) {
        state.siderItem = payload
    } else {
        state.activeMenuItem = createPatch(state.siderItem, payload)
    }
    return {
        ...state,
    }
}