import * as actionTypes from './actionTypes';

export const openMenu = () => {
  return {
    type: actionTypes.OPEN_MENU,
  };
};

export const getComponentId = (event) => {
  return {
    type: actionTypes.GET_COMPONENT_ID,
    componentId: event.target.id
  };
};

export const removeComponentId = () => {
  return {
    type: actionTypes.REMOVE_COMPONENT_ID,
    componentId: null
  };
};