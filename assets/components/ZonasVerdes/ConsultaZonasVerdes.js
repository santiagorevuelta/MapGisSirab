import React, {useEffect, useState} from 'react';
import FormConsulta from '../ZonasVerdes/FormConsulta';
import {notifyMessage} from '../../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from '../../helpers/buscarDatos';
import ResultSearch from './ResultSearch';
import {limpiarMapa} from '../map/BackgroundMap';
import tsconfig from '../../tsconfig.json';
import combosArbol from '../../helpers/combosArbol';

const ModalConsult = ({label, setOption, back, tabArbol, setIndexSnap}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    return () => {
      let url = tsconfig[tsconfig.use].searchZone.combos;
      combosArbol(url).then(res => {
        setCombos(res);
      });
    };
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
      let response = await buscarDatos(filtros, page, 'searchZone');
      if (response.data.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        limpiarMapa();
        return;
      }
      setDataResult(response);
      setIndexSnap(2);
    }
    setBuscar(obj);
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    await fnBuscar(true, filtros, page);
  };

  const filter = filtros => {
    if (filtros.fecha && filtros.fecha !== '') {
      if (filtros.fecha.split('-')[1] === '') {
        return false;
      }
    }
    return true;
  };

  const fnLimpiar = obj => {
    setBuscar(obj);
  };

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormConsulta fnBuscar={fnBuscar} fnLimpiar={fnLimpiar} combos={combos} />
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
