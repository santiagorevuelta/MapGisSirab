import React from 'react';
import CarouselCards from '../components/Arbol/VerArbol/CarruseImagenes/Carrusel';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoArbol from '../components/Arbol/VerArbol/TabInfo/tabs';
import Interventions from '../components/Arbol/VerArbol/CarruselIntervenciones/Interventions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {theme} from '../core/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import buscarDatosId from '../helpers/buscarDatosId'


export default class ViewTree extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      codigo_arbol: {},
      fotos: [],
      intervenciones: [],
    };
  }

  async componentDidMount() {
    let item = await AsyncStorage.getItem('items');
        item = item == null ? null : JSON.parse(item);
    this.setState({ codigo_arbol:item.codigo_arbol});
    let datosArbol = await buscarDatosId(item.id_arbol,'searchTree');
    this.setState({fotos: datosArbol.fotos});
    this.setState({intervenciones: datosArbol.intervenciones});
    AsyncStorage.setItem('verArbol', JSON.stringify(datosArbol.verArbol))
    AsyncStorage.setItem('variables', JSON.stringify(datosArbol.variables))

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
          cantidad={this.state.fotos.length}
          codigo={this.state.codigo_arbol}
          index={this.state.index}
        />
        <CarouselCards data={this.state.fotos} setCant={this.setCant} />
        <InfoArbol />
        <Interventions data={this.state.intervenciones} />
      </SafeAreaView>
    );
  }
}
