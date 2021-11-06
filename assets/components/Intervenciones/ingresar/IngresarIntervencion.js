import React, {useEffect} from "react";
import HeaderModal from "../../home/HeaderModal";
import FormIngresarIntervencion from "./FormIngresarIntervencion";

const ModalIngresarArbol = ({ ...props }) => {

    const fnGuardar = () => {
        console.log("ok")
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
