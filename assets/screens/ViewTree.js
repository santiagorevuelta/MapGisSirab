import React, {useState} from 'react';
import CarouselCards from '../components/Arbol/VerArbol/CarruseImagenes/Carrusel';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoArbol from '../components/Arbol/VerArbol/TabInfo/tabs';
import data from '../components/Arbol/VerArbol/CarruseImagenes/data';
import Interventions from '../components/Arbol/VerArbol/CarruselIntervenciones/Interventions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ViewTree extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      codigo: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('codigo').then(codigo => {
      this.setState({codigo});
    });
  }

  setCant = index => {
    this.setState({index});
  };

  navigate = name => {
    this.props.navigation.reset({
      index: 2,
      routes: [{name}],
    });
  };
  render() {
    return (
      <>
        <RenderHeader
          nav={this.navigate}
          cantidad={data.length}
          codigo={this.state.codigo}
          index={this.state.index}
        />
        <CarouselCards data={data} setCant={this.setCant} />
        <InfoArbol />
        <Interventions />
      </>
    );
  }
}
