import React, {useReducer} from 'react';

import VariablesReducer from './VariablesReducer';
import VariableContext from './VariableContext';
import initialjson from '../../src/initialjson.json';

const VariablesState = ({children}) => {
  const initialState = initialjson.datosVariables;

  const [state, dispatch] = useReducer(VariablesReducer, initialState);
  const updateVariables = data => {
    dispatch({
      type: 'UPDATE_VARIABLES',
      payload: data,
    });
  };

  const deleteVariables = (data = null) => {
    dispatch({
      type: 'DELETE_VARIABLES',
      payload: data,
    });
  };

  return (
    <VariableContext.Provider
      value={{
        variables: state,
        updateVariables,
        deleteVariables,
      }}>
      {children}
    </VariableContext.Provider>
  );
};

export default VariablesState;
