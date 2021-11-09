import React, {useEffect} from "react";
import HeaderModal from "../../home/HeaderModal";
import FormIngresar from "./FormIngresarZonaVerde";

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
      <FormIngresar fnGuardar={fnGuardar} />
    </>
  );
};

export default ModalIngresarArbol;
