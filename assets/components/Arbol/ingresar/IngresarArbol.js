import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarArbol from './FormIngresarArbol';
import encode64 from '../../../helpers/B64';
import guardarDatos from '../../../helpers/guardarDatos';
import combosArbol from '../../../helpers/combosArbol';

const ModalIngresarArbol = ({...props}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = async (datosArbol, datosVariables, datosImagenes) => {
    let formData = new FormData();
    formData.append('datosArbol', encode64(JSON.stringify(datosArbol)));
    formData.append('datosVariables', encode64(JSON.stringify(datosVariables)));
    formData.append('datosImagenes', encode64(JSON.stringify(datosImagenes)));

    let res = await guardarDatos(formData, 'searchTree');
    console.log(res)
  };

  useEffect(() => {
    combosArbol().then(data => {
      setCombos(data);
    });
  }, []);
  console.log(combos)
  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormIngresarArbol fnGuardar={fnGuardar} data={combos} />
    </>
  );
};

export default ModalIngresarArbol;
