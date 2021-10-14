import React, {useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalConsulta from '../components/Arbol/ConsultaArbol';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  const [consultaArbol, setConsultaArbol] = useState({value: false});
  AsyncStorage.getItem('login').then(value => {
    if (value !== 'Ok') {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  });

  const tabArbol = name => {
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };

  return (
    <MapComponent>
      <Header />
      {!consultaArbol.value ? (
        <ModalOptions setConsultaArbol={setConsultaArbol} tabArbol={tabArbol} />
      ) : (
        <ModalConsulta setConsultaArbol={setConsultaArbol} />
      )}
    </MapComponent>
  );
}
