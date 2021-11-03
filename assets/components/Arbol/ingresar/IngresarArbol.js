import React from "react";
import HeaderModal from "../../home/HeaderModal";
import FormConsultaArbol from "./FormIngresarArbol";


const ModalConsult = ({ ...props }) => {
  const fnGuardar = async () => {

  };
  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsultaArbol fnGuardar={fnGuardar} />
    </>
  );
};

export default ModalConsult;
