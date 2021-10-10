import React, {useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalConsulta from '../components/Arbol/ConsultaArbol';
import Animated from 'react-native-reanimated';

export default function Dashboard({navigation}) {
  const [consultaArbol, setConsultaArbol] = useState({value: true});
  const nav = name => {
    navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };
  return (
    <MapComponent>
      <Header />
      <Animated.View>
        {!consultaArbol.value ? (
          <ModalOptions setConsultaArbol={setConsultaArbol} />
        ) : (
          <ModalConsulta setConsultaArbol={setConsultaArbol} nav={nav} />
        )}
      </Animated.View>
    </MapComponent>
  );
}
