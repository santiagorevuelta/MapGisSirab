import React, {useMemo, useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalOptionsType from '../components/home/ModalOptionsType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from '@gorhom/bottom-sheet';
import {consultToken} from '../core/general';
import {ScrollView} from 'react-native';
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
  consultToken({navigation});

  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState('inicio');
  const [snp, setSnp] = useState(1);
  const bottomSheetRef = React.useRef(null);
  const snapPoints = useMemo(() => ['3%', '30%'], []);
  const snapPointsVer = useMemo(() => ['3%', '25%', '50%', '70%', '95%'], []);

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
  console.log(option);
  return (
    <MapComponent>
      {headerHide ? null : <Header />}
      <BottomSheet
        ref={bottomSheetRef}
        key={'busqueda'}
        onChange={index => {
          setHeaderHide(index === snapPointsVer.length - 1);
        }}
        index={snp}
        initialSnapIndex={snp}
        snapPoints={snapPoints}>
        {option === 'inicio' ? (
          <ModalOptions setOption={setView} />
        ) : 'Consulta,Ingresar'.indexOf(option) !== -1 ? (
          <ModalOptionsType
            setOption={setView}
            type={option}
            tabArbol={tabArbol}
          />
        ) : option === '' ? (
          <ConsultarArbol />
        ) : null}
      </BottomSheet>
    </MapComponent>
  );
}
