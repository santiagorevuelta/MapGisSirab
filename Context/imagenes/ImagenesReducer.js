import {DELETE_IMAGENES, UPDATE_IMAGENES} from '../Types';

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case UPDATE_IMAGENES:
      return [...payload];
    case DELETE_IMAGENES:
      if (payload) {
        delete state[payload];
        return [];
      } else {
        return [];
      }
    default:
      return state;
  }
};
