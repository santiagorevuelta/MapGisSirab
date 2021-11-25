import React, {useEffect, useState} from 'react';
import FormConsulta from './FormConsultaIntervenciones';
import {notifyMessage} from '../../core/general';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from '../../helpers/buscarDatos';
import ResultSearch from './ResultSearch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tsconfig from '../../tsconfig.json';
import combosArbol from '../../helpers/combosArbol';

const ModalConsult = ({...props}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    let url = tsconfig[tsconfig.use].searchIntervencion.combos;
    combosArbol(url).then(res => {
      setCombos(res);
    });
  }, [setCombos]);

  const fnBuscar = async (obj, filtros = {}, page = 1) => {
    if (obj) {
      if (filtros.fecha && filtros.fecha === '-') {
        delete filtros.fecha;
      }
      let res = filter(filtros);
      if (!res) {
        notifyMessage('La fecha final es obligatoria');
        return;
      }
      let response = await buscarDatos(filtros, page, 'searchIntervencion');
      if (response.data.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        return;
      }
      setDataResult(response);
      props.setIndexSnap(2);
    }
    setBuscar(obj);
  };

  const filter = filtros => {
    if (filtros.fecha && filtros.fecha !== '') {
      if (filtros.fecha.split('-')[1] === '') {
        return false;
      }
    }
    return true;
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    await fnBuscar(true, filtros, page);
  };

  const fnLimpiar = obj => {
    setBuscar(false);
  };

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsulta fnBuscar={fnBuscar} fnLimpiar={fnLimpiar} combos={combos} />
      {buscar ? (
        <ResultSearch
          tabArbol={props.tabArbol}
          data={dataResult.data}
          meta={dataResult.meta}
          paginar={paginar}
        />
      ) : null}
    </>
  );
};

export default ModalConsult;
