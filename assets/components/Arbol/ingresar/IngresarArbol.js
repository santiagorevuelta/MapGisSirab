import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarArbol from './FormIngresarArbol';
import encode64 from '../../../helpers/B64';
import guardarDatos from '../../../helpers/guardarDatos';
import combosArbol from '../../../helpers/combosArbol';
import json from '../../../initialjson.json';
import tsconfig from "../../../tsconfig.json";

const ModalIngresarArbol = ({...props}) => {
  const [combos, setCombos] = React.useState([]);
  const [dataForm, setDataForm] = React.useState({});
  const [dataVar, setDataVar] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);

  const fnGuardar = async (datosArbol, datosVariables, datosImagenes) => {
    let formData = new FormData();
    formData.append('datosArbol', encode64(JSON.stringify(datosArbol)));
    formData.append('datosVariables', encode64(JSON.stringify(datosVariables)));
    formData.append('datosImagenes', encode64(JSON.stringify(datosImagenes)));
    let res = await guardarDatos(formData, 'searchTree');
  };

  useEffect(async() => {
    let url = tsconfig[tsconfig.use].searchTree.combos
    let res =  await combosArbol(url);
    setCombos(res);
  }, []);

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormIngresarArbol
        fnGuardar={fnGuardar}
        combos={combos}
        dataVar={dataVar}
        setDataVar={setDataVar}
        dataImage={dataImage}
        setDataImage={setDataImage}
        setDataForm={setDataForm}
        dataForm={dataForm}
      />
    </>
  );
};

export default ModalIngresarArbol;
