import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialstate = {
  openMenu: false,
  backdropShow: false,
  componentId: null
};

const openMenu = (state) => {
  return updateObject(state, {
    openMenu: !state.openMenu,
    backdropShow: !state.backdropShow
  });
};

const getComponentId = (state, action) => {
  return updateObject(state, {
    componentId: action.componentId
  });
};

const removeComponentId = (state, action) => {
  return updateObject(state, {
    componentId: action.componentId
  });
};

const reducer = (state = initialstate, action) => {
  switch(action.type) {
    case actionTypes.GET_COMPONENT_ID: return getComponentId(state, action);
    case actionTypes.REMOVE_COMPONENT_ID: return removeComponentId(state, action);
    case actionTypes.OPEN_MENU: return openMenu(state, action);
    default: return state
  }
};

export default reducer;