import React from 'react';
import CarouselCards from '../components/Arbol/VerArbol/CarruseImagenes/Carrusel';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoArbol from '../components/Arbol/VerArbol/TabInfo/tabs';
import data from '../components/Arbol/VerArbol/CarruseImagenes/data';
import Interventions from '../components/Arbol/VerArbol/CarruselIntervenciones/Interventions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {theme} from '../core/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export default class ViewTree extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      item: {},
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('items').then(valor => {
      let item = JSON.parse(valor);
      this.setState({item});
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
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.blanco,
          height: responsiveHeight(100),
        }}>
        <RenderHeader
          nav={this.navigate}
          cantidad={data.length}
          codigo={this.state.item.codigo_arbol}
          index={this.state.index}
        />
        <CarouselCards data={data} setCant={this.setCant} />
        <InfoArbol />
        <Interventions />
      </SafeAreaView>
    );
  }
}
