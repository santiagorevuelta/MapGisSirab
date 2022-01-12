import React, {useEffect, useState} from 'react';
import FormConsultaArbol from './FormConsultaArbol';
import ResultSearch from './ResultSearch';
import {notifyMessage} from '../../core/general';
import HeaderModal from '../home/HeaderModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import buscarDatos from '../../helpers/buscarDatos';
import {limpiarMapa, verEnMapaAllPoint} from '../map/BackgroundMap';
import {getData} from '../../combos';

const ModalOptionsArbol = props => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const [combos, setCombos] = useState([]);
  const [where, setWhere] = useState({});

  useEffect(() => {
    async function initial() {
      let res = await getData('arbol');
      setCombos(res);
    }
    initial().then();
  }, [combos.length, setCombos]);

  const fnBuscar = async (obj, filtros = {}, page = 1) => {
    props.setLoadApp(true);
    if (obj) {
      setWhere(filtros);
      if (filtros.fecha && filtros.fecha === '-') {
        delete filtros.fecha;
      }
      let res = filter(filtros);
      if (!res) {
        notifyMessage('La fecha final es obligatoria');
        props.setLoadApp(false);
        return;
      }
      props.setLoadApp(true);
      let response = await buscarDatos(filtros, page, 'searchTree');
      if (response.data.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        limpiarMapa();
        props.setLoadApp(false);
        setBuscar(false);
        return;
      }
      props.setIndexSnap(2);
      setDataResult(response);
      verEnMapaAllPoint(response.data);
      props.setLoadApp(false);
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

  const fnLimpiar = obj => {
    props.setIndexSnap(1);
    setBuscar(false);
    limpiarMapa();
  };

  const pasarNav = obj => {
    props.tabArbol(obj);
  };

  const paginar = async page => {
    props.setLoadApp(true);
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    await fnBuscar(true, filtros, page);
    props.setLoadApp(false);
  };

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsultaArbol
        fnBuscar={fnBuscar}
        fnLimpiar={fnLimpiar}
        combos={combos}
      />
      {buscar && (
        <ResultSearch
          tabArbol={pasarNav}
          setIndexSnap={props.setIndexSnap}
          data={dataResult.data}
          meta={dataResult.meta}
          paginar={paginar}
        />
      )}
    </>
  );
};

export default ModalOptionsArbol;
