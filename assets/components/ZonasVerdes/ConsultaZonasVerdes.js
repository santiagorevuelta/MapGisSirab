import React, {useState} from 'react';
import FormConsulta from '../ZonasVerdes/FormConsulta';
import {notifyMessage} from '../../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from '../../helpers/buscarDatos';
import ResultSearch from './ResultSearch';
import {limpiarMapa} from '../map/BackgroundMap';

const ModalConsult = ({label, setOption, back, tabArbol}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});

  const fnBuscar = async (obj, filtros = {}) => {
    if (obj) {
      let response = await buscarDatos(filtros, 1, 'searchZone');
      if (response.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        limpiarMapa();
        return;
      }
      setDataResult(response);
    }
    setBuscar(obj);
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    let response = await buscarDatos(filtros, page, 'searchZone');
    if (response.length === 0) {
      notifyMessage('La consulta no obtuvo resultados');
      limpiarMapa();
      return;
    }
    setDataResult(response);
  };

  const fnLimpiar = obj => {
    setBuscar(obj);
    limpiarMapa();
  };

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormConsulta fnBuscar={fnBuscar} fnLimpiar={fnLimpiar} />
      {buscar ? (
        <ResultSearch
          tabArbol={tabArbol}
          data={dataResult.data}
          meta={dataResult.meta}
          paginar={paginar}
        />
      ) : null}
    </>
  );
};

export default ModalConsult;
