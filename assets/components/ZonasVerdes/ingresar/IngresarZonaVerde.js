import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresar from './FormIngresarZonaVerde';
import combosArbol from '../../../helpers/combosArbol';
import tsconfig from '../../../tsconfig.json';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {notifyMessage} from '../../../core/general';

const ModalIngresar = ({label, setOption, back}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = async (datos, datosImagenes) => {
    datos.fecha = datos.fecha.split('/').reverse().join('-');
    console.log(datos);
    let formData = new FormData();
    formData.append('datosZona', base64.encode(JSON.stringify(datos)));
    formData.append(
      'datosImagenes',
      base64.encode(JSON.stringify(datosImagenes)),
    );
    let res = await guardarDatos(formData, 'searchZone');
    notifyMessage(res.message);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchZone.combos;
    let res = await combosArbol(url);
    setCombos(res);
  }, [setCombos]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresar fnGuardar={fnGuardar} combos={combos} />
    </>
  );
};

export default ModalIngresar;
