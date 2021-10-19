import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalConsult from '../components/Arbol/ConsultaArbol';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from '@gorhom/bottom-sheet';

export default function Dashboard({navigation}) {
  AsyncStorage.getItem('login').then(value => {
    //console.log('login: ' + value);
    if (value !== 'Ok') {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  });

  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState(false);
  const [snp, setSnp] = useState(1);
  const bottomSheetRef = React.useRef(null);
  const snapPoints = useMemo(() => ['3%', '30%'], []);
  const snapPointsVer = useMemo(() => ['3%', '25%', '50%', '70%', '100%'], []);

  const setView = index => {
    if (!index) {
      AsyncStorage.setItem('option', '0');
      setSnp(1);
    }
    setOption(index);
  };

  const tabArbol = name => {
    AsyncStorage.setItem('option', '1');
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };

  AsyncStorage.getItem('option').then(value => {
    if (value === '1') {
      setView(true);
      setSnp(snapPointsVer.length - 1);
    }
  });

  return (
    <MapComponent>
      <BottomSheet
        ref={bottomSheetRef}
        key={'busqueda'}
        onChange={index => {
          setHeaderHide(index === snapPointsVer.length - 1);
        }}
        index={snp}
        initialSnapIndex={snp}
        snapPoints={!option ? snapPoints : snapPointsVer}>
        {!option ? (
          <ModalOptions setOption={setView} />
        ) : (
          <ModalConsult setOption={setView} tabArbol={tabArbol} />
        )}
      </BottomSheet>
      {headerHide ? null : <Header />}
    </MapComponent>
  );
}
