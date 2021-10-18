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
  const bottomSheetRef = React.useRef(null);
  const snapPoints = useMemo(() => ['3%', '30%'], []);
  const snapPointsVer = useMemo(() => ['3%', '25%', '50%', '70%', '100%'], []);

  const setView = index => {
    setOption(index);
  };

  const tabArbol = name => {
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };

  return (
    <MapComponent>
      <BottomSheet
        ref={bottomSheetRef}
        key={'busqueda'}
        onChange={index => {
          setHeaderHide(index === snapPointsVer.length - 1);
        }}
        index={!option ? 1 : 3}
        initialSnapIndex={!option ? 1 : 3}
        snapPoints={!option ? snapPoints : snapPointsVer}>
        {!option ? (
          <ModalOptions setOption={setView} />
        ) : (
          <ModalConsult setOption={setView} />
        )}
      </BottomSheet>
      {headerHide ? null : <Header />}
    </MapComponent>
  );
}
