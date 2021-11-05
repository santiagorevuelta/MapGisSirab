import React from "react";
import HeaderModal from "../../home/HeaderModal";
import FormIngresarIntervencion from "./FormIngresarIntervencion";


const ModalIngresarArbol = ({ ...props }) => {
  const fnGuardar = async () => {

  };
  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormIngresarIntervencion fnGuardar={fnGuardar} />
    </>
  );
};

export default ModalIngresarArbol;
