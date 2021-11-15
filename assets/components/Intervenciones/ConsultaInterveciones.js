import React, {useState} from 'react';
import FormConsulta from './FormConsultaIntervenciones';
import {notifyMessage} from '../../core/general';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from '../../helpers/buscarDatos';
import ResultSearch from './ResultSearch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {limpiarMapa} from '../map/BackgroundMap';

const ModalConsult = ({...props}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});

  const fnBuscar = async (obj, filtros = {}) => {
    if (obj) {
      let response = await buscarDatos(filtros, 1, 'searchIntervencion');
      if (response.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        return;
      }
      setDataResult(response);
    }
    setBuscar(obj);
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    let response = await buscarDatos(filtros, page, 'searchIntervencion');
    if (response.length === 0) {
      notifyMessage('La consulta no obtuvo resultados');
      return;
    }
    setDataResult(response);
  };

  const fnLimpiar = obj => {
    setBuscar(false);
    limpiarMapa();
  };

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsulta fnBuscar={fnBuscar} fnLimpiar={fnLimpiar} />
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
