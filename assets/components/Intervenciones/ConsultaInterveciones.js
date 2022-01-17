import React, {useEffect, useState} from 'react';
import FormConsulta from './FormConsultaIntervenciones';
import {notifyMessage} from '../../core/general';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from '../../helpers/buscarDatos';
import ResultSearch from './ResultSearch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tsconfig from '../../tsconfig.json';
import combosArbol from '../../helpers/combosArbol';
import {getData} from '../../combos';
import {limpiarMapa} from '../map/BackgroundMap';

const ModalConsult = props => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const [combos, setCombos] = useState([]);
  const [tipoCategoria, setTipoCategoria] = React.useState(1);

  useEffect(() => {
    async function initial() {
      let res = await getData(
        tipoCategoria === 1 ? 'intervencionArbol' : 'intervencionZonaVerde',
      );
      setCombos(res);
    }
    initial().then();
  }, [combos.length, props, setCombos, tipoCategoria]);


  const fnBuscar = async (obj, filtros = {}, page = 1) => {
    props.setLoadApp(true);
    if (obj) {
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
      let response = await buscarDatos(
        filtros,
        page,
        tipoCategoria === 1 ? 'searchIntervencion' : 'intervencionZonaVerde',
      );
      if (response.data.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        props.setLoadApp(false);
        return;
      }
      setDataResult(response);
      props.setIndexSnap(2);
    }
    setBuscar(obj);
    props.setLoadApp(false);
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
    props.setLoadApp(true);
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    await fnBuscar(true, filtros, page);
    props.setLoadApp(false);
  };

  const fnLimpiar = obj => {
    props.setIndexSnap(1);
    setBuscar(false);
    setTipoCategoria(1);
    limpiarMapa();
  };

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsulta
        fnBuscar={fnBuscar}
        fnLimpiar={fnLimpiar}
        combos={combos}
        tipoCategoria={tipoCategoria}
        setTipoCategoria={setTipoCategoria}
      />
      {buscar ? (
        <ResultSearch
          tipoCategoria={tipoCategoria}
          data={dataResult.data}
          meta={dataResult.meta}
          paginar={paginar}
          setLoadApp={props.setLoadApp}
        />
      ) : null}
    </>
  );
};

export default ModalConsult;
