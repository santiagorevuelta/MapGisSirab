import React, {useReducer} from 'react';

import ImagenesReducer from './ImagenesReducer';
import ImagenesContext from './ImagenesContext';

const ImagenesState = ({children}) => {
  const initialState = [];

  const [state, dispatch] = useReducer(ImagenesReducer, initialState);
  const updateImages = data => {
    dispatch({
      type: 'UPDATE_IMAGENES',
      payload: data,
    });
  };

  const deleteImages = (data = []) => {
    dispatch({
      type: 'DELETE_IMAGENES',
      payload: data,
    });
  };

  return (
    <ImagenesContext.Provider
      value={{
        imagenes: state,
        updateImages,
        deleteImages,
      }}>
      {children}
    </ImagenesContext.Provider>
  );
};

export default ImagenesState;
