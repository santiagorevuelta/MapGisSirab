import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarArbol from './FormIngresarArbol';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {notifyMessage} from '../../../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../../../combos';
import {reset} from '../../../helpers/dataSave';

const ModalIngresarArbol = ({
  label,
  setOption,
  back,
  setIndexSnap,
  snp,
  setLoadApp,
}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = async (datosArbol, datosVariables, datosImagenes) => {
    let formData = new FormData();
    formData.append('datosArbol', base64.encode(JSON.stringify(datosArbol)));
    formData.append(
      'datosVariables',
      base64.encode(JSON.stringify(datosVariables)),
    );
    formData.append(
      'datosImagenes',
      base64.encode(JSON.stringify(datosImagenes)),
    );
    let res = await guardarDatos(formData, 'searchTree');
    if (res.message) {
      notifyMessage(res.message);
      setIndexSnap(1);
      return 'Ok';
    } else {
      notifyMessage('Error al guardar');
      return false;
    }
  };

  useEffect(() => {
    async function initial() {
      setLoadApp(true);
      AsyncStorage.setItem('variables', '');
      reset();
      let res = await getData('arbol');
      setCombos(res);
      setIndexSnap(snp.length - 1);
      setLoadApp(false);
    }
    initial().then();
  }, [combos.length, setCombos, setIndexSnap, setLoadApp, snp]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresarArbol
        fnGuardar={fnGuardar}
        combos={combos}
        setIndexSnap={setIndexSnap}
        setLoadApp={setLoadApp}
      />
    </>
  );
};

export default ModalIngresarArbol;
