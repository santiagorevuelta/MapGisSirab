import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FormConsulta from '../ZonasVerdes/FormConsulta';
import {notifyMessage} from '../../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderModal from '../home/HeaderModal';
import buscarDatos from "../../helpers/buscarDatos";
import ResultSearch from './ResultSearch'
import { limpiarMapa } from "../map/BackgroundMap";

const ModalConsult = ({...props}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});

  const fnBuscar = async (obj, filtros = {}) => {
    if (obj) {
      let response = await buscarDatos(filtros, 1,'searchZone');
      if (response.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        limpiarMapa()
        return;
      }
      setDataResult(response);
    }
    setBuscar(obj);
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem('filtros');
    let filtros = res ? {} : JSON.parse(res);
    let response = await buscarDatos(filtros, page,'searchZone');
    if (response.length === 0) {
      notifyMessage('La consulta no obtuvo resultados');
      limpiarMapa()
      return;
    }
    setDataResult(response);
  };

  const fnLimpiar = (obj) => {
    setBuscar(obj);
    limpiarMapa();
  }

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

const styles = StyleSheet.create({
  contend: {
    flexDirection: 'row',
    height: responsiveHeight(5),
    paddingLeft: responsiveWidth(5),
  },
  regress: {
    width: responsiveWidth(30),
  },
  regressTxt: {
    color: theme.colors.headers,
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'normal',
    fontStyle: 'italic',
    position: 'absolute',
    textDecorationLine: 'underline',
    top: responsiveWidth(1),
    paddingLeft: responsiveWidth(5),
    elevation: 5,
  },
  regressHead: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
});