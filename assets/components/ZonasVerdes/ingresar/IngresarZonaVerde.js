import React, {useEffect} from "react";
import HeaderModal from "../../home/HeaderModal";
import FormIngresar from "./FormIngresarZonaVerde";
import combosArbol from '../../../helpers/combosArbol';
import tsconfig from "../../../tsconfig.json";

const ModalIngresar = ({ ...props }) => {
    const [combos, setCombos] = React.useState([]);

    const fnGuardar = () => {
        console.log("ok")
    };

    useEffect(() => {
        let url = tsconfig[tsconfig.use].searchZone.combos
        combosArbol(url).then(data => {
            setCombos(data);
            console.log(combos)
        });
    }, []);

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormIngresar fnGuardar={fnGuardar} data={combos}/>
    </>
  );
};

export default ModalIngresar;
