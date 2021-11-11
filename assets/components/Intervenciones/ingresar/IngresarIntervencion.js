import React from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarIntervencion from './FormIngresarIntervencion';

const ModalIngresarArbol = ({label, setOption, back}) => {
  const fnGuardar = () => {
    console.log('ok');
  };

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresarIntervencion fnGuardar={fnGuardar} />
    </>
  );
};

export default ModalIngresarArbol;
