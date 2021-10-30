import React, {useMemo, useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalOptionsType from '../components/home/ModalOptionsType';
import ModalOptionsArbol from '../components/Arbol/ConsultaArbol';
import ModalZonasVerdes from '../components/ZonasVerdes/ConsultaZonasVerdes';
import ModalIntervenciones from '../components/Intervenciones/ConsultaInterveciones';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from '@gorhom/bottom-sheet';
import {consultToken} from '../core/general';
import config from '../tsconfig.json';

export default function Dashboard({navigation}) {
  AsyncStorage.getItem('login').then(value => {
    //console.log('login: ' + value);
    /* if (value !== 'Ok') {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }*/
  });

  consultToken().then(r => {
    if (r)
      return;
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  });

  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState('inicio');
  const [optionOld, setOptionOld] = useState('inicio');
  const [snp, setSnp] = useState(1);
  const bottomSheetRef = React.useRef(null);
  const snapPoints = useMemo(() => ['3%', '25%'], []);
  const snapPointsVer = useMemo(() => ['3%', '44%', '80%', '100%'], []); //, '100%'

  const setView = index => {
    if (!index) {
      AsyncStorage.setItem('option', '0');
      setSnp(1);
    }
    setOptionOld(option);
    setOption(index);
  };

  const tabArbol = name => {
    AsyncStorage.setItem('option', '1');
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };
  return (
    <MapComponent >
      {!headerHide && (<Header setOption={setView} />)}
      <BottomSheet
        ref={bottomSheetRef}
        key={'busqueda'}
        onChange={index => {
          setHeaderHide(index === snapPointsVer.length - 1);
        }}
        index={snp}
        initialSnapIndex={snp}
        snapPoints={
          'Consulta,Ingresar,inicio'.indexOf(option) !== -1
            ? snapPoints
            : snapPointsVer
        }>
        {option === 'inicio' ? (
          <ModalOptions setOption={setView} />
        ) : 'Consulta,Ingresar'.indexOf(option) !== -1 ? (
          <ModalOptionsType
            setOption={setView}
            type={option}
            tabArbol={tabArbol}
          />
        ) : option === config.home[0].label ? (
          <ModalOptionsArbol
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option}
            tabArbol={tabArbol}
          />
        ) : option === config.home[1].label ? (
          <ModalIntervenciones
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option}
            tabArbol={tabArbol}
          />
        ) : option === config.home[2].label ? (
          <ModalZonasVerdes
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option}
            tabArbol={tabArbol}
          />
        ) : null}
      </BottomSheet>
    </MapComponent>
  );
}
