import React from 'react';
import CarouselCards from '../components/commons/CarruseImagenes/Carrusel';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoArbol from '../components/Arbol/VerArbol/TabInfo/tabs';
import Interventions from '../components/commons/CarruselIntervenciones/Interventions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {theme} from '../core/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import buscarDatosId from '../helpers/buscarDatosId';
import config from '../tsconfig.json';
import {navigate} from '../components/map/BackgroundMap';

export default class ViewTree extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      codigo_arbol: '',
      fotos: [],
      intervenciones: [],
      verArbol: {},
      variables: {},
    };
  }

  async componentDidMount() {
    console.log(this.props.route.params);
    let item = await AsyncStorage.getItem('items');
    AsyncStorage.setItem(
      'Buscar',
      JSON.stringify({option: 'Consulta', optionOld: 'Consultar'}),
    );
    item = item == null ? null : JSON.parse(item);
    let datosArbol = await buscarDatosId(item.id_arbol, 'searchTree');
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      fotos: datosArbol.fotos,
      intervenciones: datosArbol.intervenciones,
      verArbol: datosArbol.verArbol,
      variables: datosArbol.variables,
      codigo_arbol: item.codigo_arbol,
    });
  }

  setCant = index => {
    this.setState({index});
  };

  navig = name => {
    this.props.navigation.navigate(name, this.props.route.params);
  };

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.blanco,
          height: responsiveHeight(100),
        }}>
        <RenderHeader
          nav={this.navig}
          cantidad={this.state.fotos.length}
          codigo={this.state.codigo_arbol}
          index={this.state.index}
        />
        <CarouselCards data={this.state.fotos} setCant={this.setCant} />
        <InfoArbol
          dataArbol={this.state.verArbol}
          dataVariables={this.state.variables}
        />
        <Interventions data={this.state.intervenciones} origen={'Arbol'} />
      </SafeAreaView>
    );
  }
}
