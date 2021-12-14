import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarArbol from './FormIngresarArbol';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import combosArbol from '../../../helpers/combosArbol';
import tsconfig from '../../../tsconfig.json';
import {notifyMessage} from '../../../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalIngresarArbol = ({label, setOption, back, setIndexSnap}) => {
  const [combos, setCombos] = React.useState([]);
  const [dataForm, setDataForm] = React.useState({});
  const [dataVar, setDataVar] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);

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
      AsyncStorage.setItem('variables', '');
      setDataForm({});
      setDataImage({});
      notifyMessage(res.message);
    } else {
      notifyMessage('Error al guardar');
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchTree.combos;
    let res = await combosArbol(url);
    setCombos(res);
  }, [setCombos]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresarArbol
        fnGuardar={fnGuardar}
        combos={combos}
        dataVar={dataVar}
        setDataVar={setDataVar}
        dataImage={dataImage}
        setDataImage={setDataImage}
        setDataForm={setDataForm}
        dataForm={dataForm}
        setIndexSnap={setIndexSnap}
      />
    </>
  );
};

export default ModalIngresarArbol;
