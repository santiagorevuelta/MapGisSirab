import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormConsultaArbol from './FormIngresarArbol';
import encode64 from '../../../helpers/B64';
import guardarDatos from '../../../helpers/guardarDatos';
import combosArbol from '../../../helpers/combosArbol';

const ModalIngresarArbol = ({...props}) => {
  const fnGuardar = async (datosArbol, datosVariables, datosImagenes) => {
    let formData = new FormData();
    formData.append('datosArbol', encode64(JSON.stringify(datosArbol)));
    formData.append('datosVariables', encode64(JSON.stringify(datosVariables)));
    formData.append('datosImagenes', encode64(JSON.stringify(datosImagenes)));
    await guardarDatos(formData, 'searchTree');
  };

  const [combos, setCombos] = React.useState([]);

  useEffect(() => {
    combosArbol().then(data => {
      setCombos(data);
    });
  }, []);

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsultaArbol fnGuardar={fnGuardar} combos={combos} />
    </>
  );
};

export default ModalIngresarArbol;
