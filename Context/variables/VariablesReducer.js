import {DELETE_VARIABLES, UPDATE_VARIABLES} from '../Types';
import initialjson from '../../src/initialjson.json';

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case UPDATE_VARIABLES:
      return {...payload};
    case DELETE_VARIABLES:
      if (payload) {
        delete state[payload];
        return initialjson.datosVariables;
      } else {
        return initialjson.datosVariables;
      }
    default:
      return state;
  }
};
