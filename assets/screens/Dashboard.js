import React, {useState} from 'react';
import {MapComponent} from '../components/map/BackgroundMap';
import Header from '../components/home/Header';
import ModalOptions from '../components/home/ModalOptions';
import ModalConsulta from '../components/Arbol/ConsultaArbol';

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
      {!consultaArbol.value ? (
        <ModalOptions setConsultaArbol={setConsultaArbol} />
      ) : (
        <ModalConsulta setConsultaArbol={setConsultaArbol} nav={nav} />
      )}
    </MapComponent>
  );
}
