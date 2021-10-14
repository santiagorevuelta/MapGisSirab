import React from 'react';
import CarouselCards from '../components/Arbol/VerArbol/CarruseImagenes/Carrusel';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoArbol from '../components/Arbol/VerArbol/TabInfo/tabs';
import data from '../components/Arbol/VerArbol/CarruseImagenes/data';
import Interventions from '../components/Arbol/VerArbol/CarruselIntervenciones/Interventions';

export default function ViewTree({navigation}) {
  const [index, setCant] = React.useState(0);
  const nav = name => {
    navigation.reset({
      index: 1,
      routes: [{name}],
    });
  };
  return (
    <>
      <RenderHeader
        nav={nav}
        cantidad={data.length}
        codigo={'123'}
        index={index}
      />
      <CarouselCards data={data} setCant={setCant} />
      <InfoArbol />
      <Interventions />
    </>
  );
}
