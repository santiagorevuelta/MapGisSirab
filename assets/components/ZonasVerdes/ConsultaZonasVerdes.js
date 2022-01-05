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
import {getData} from '../../combos';

const ModalConsult = ({
  label,
  setOption,
  back,
  tabArbol,
  setIndexSnap,
  setLoadApp,
}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    async function initial() {
      let res = await getData('zona');
      setCombos(res);
    }
    initial().then();
  }, [combos.length, setCombos]);

  const fnBuscar = async (obj, filtros = {}, page = 1) => {
    setLoadApp(true);
    if (obj) {
      if (filtros.fecha && filtros.fecha === '-') {
        delete filtros.fecha;
      }
      let res = filter(filtros);
      if (!res) {
        notifyMessage('La fecha final es obligatoria');
        return;
      }
      setLoadApp(true);
      let response = await buscarDatos(filtros, page, 'searchZone');
      if (response.data.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        limpiarMapa();
        setLoadApp(false);
        return;
      }
      setDataResult(response);
      setIndexSnap(2);
      setLoadApp(false);
    }
    setBuscar(obj);
    setLoadApp(false);
  };

  const paginar = async page => {
    setLoadApp(true);
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    await fnBuscar(true, filtros, page);
    setLoadApp(false);
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
