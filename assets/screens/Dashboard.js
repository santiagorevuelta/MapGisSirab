import React, {useEffect, useMemo, useState} from 'react';
import {MapComponent, setCoords} from '../components/map/BackgroundMap';
import {
  Header,
  ModalIngresarArbol,
  ModalIngresarIntervencion,
  ModalIngresarZonaVerde,
  ModalIntervenciones,
  ModalOptions,
  ModalOptionsArbol,
  ModalOptionsType,
  ModalZonasVerdes,
} from './indexDashboard';
import BottomSheet from '@gorhom/bottom-sheet';
import {consultToken} from '../core/general';
import config from '../tsconfig.json';
import tsconfig from '../tsconfig.json';
import {Platform} from 'react-native';
import combosArbol from '../helpers/combosArbol';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState('inicio');
  const [optionOld, setOptionOld] = useState(null);
  const [combos, setCombos] = useState([]);
  const [snp, setSnp] = useState(1);
  const bottomSheetRef = React.useRef(null);
  const snapPoints = useMemo(() => ['3%', '25%'], []);
  const snapPointsVer = useMemo(
    () => ['3%', '44%', '80%', Platform.OS === 'ios' ? '95%' : '100%'],
    [],
  ); //, '100%'

  useEffect(() => {
    setCoords().then();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchTree.combos;
    let res = await combosArbol(url);
    AsyncStorage.setItem('comboarbol', JSON.stringify(res));
    setCombos(res);
  }, [setCombos]);

  useEffect(() => {
    consultToken().then(r => {
      if (r) {
        return;
      }
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    });
  }, [navigation]);

  const setView = index => {
    if (!index) {
      setSnp(1);
    }
    setOptionOld(option);
    setTimeout(() => {
      setOption(index);
    }, 100);
  };

  const tabArbol = name => {
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };

  return (
    <MapComponent>
      {!headerHide && <Header setOption={setView} />}
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
        ) : optionOld === 'Consulta' ? (
          option === config.home[0].label ? (
            <ModalOptionsArbol
              setOption={setView}
              type={option}
              back={optionOld}
              combos={combos}
              label={optionOld + ' ' + option.toLowerCase()}
              tabArbol={tabArbol}
            />
          ) : option === config.home[1].label ? (
            <ModalIntervenciones
              setOption={setView}
              type={option}
              back={optionOld}
              label={optionOld + ' ' + option.toLowerCase()}
              tabArbol={tabArbol}
            />
          ) : option === config.home[2].label ? (
            <ModalZonasVerdes
              setOption={setView}
              type={option}
              back={optionOld}
              label={optionOld + ' ' + option.toLowerCase()}
              tabArbol={tabArbol}
            />
          ) : null
        ) : option === config.home[0].label ? (
          <ModalIngresarArbol
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option.toLowerCase()}
            tabArbol={tabArbol}
          />
        ) : option === config.home[1].label ? (
          <ModalIngresarIntervencion
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option.toLowerCase()}
            tabArbol={tabArbol}
          />
        ) : option === config.home[2].label ? (
          <ModalIngresarZonaVerde
            setOption={setView}
            type={option}
            back={optionOld}
            label={optionOld + ' ' + option.toLowerCase()}
            tabArbol={tabArbol}
          />
        ) : null}
      </BottomSheet>
    </MapComponent>
  );
}
