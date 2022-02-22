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
import Renderload from '../components/Load';
import {navigate} from '../components/map/BackgroundMap';
import ModalImagenes from '../components/Imagenes/ModalImagenes';

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
      loadApp: false,
    };
  }

  async componentDidMount() {
    let item = await AsyncStorage.getItem('items');
    item = item == null ? null : JSON.parse(item);
    let datosArbol = await buscarDatosId(item.id_arbol, 'searchTree');
    if (datosArbol.length !== 0) {
      let info = {
        fotos: datosArbol.fotos,
        intervenciones: datosArbol.intervenciones,
        verArbol: datosArbol.verArbol,
        variables: datosArbol.variables,
        modalVisible: false,
        codigo_arbol: item.codigo_arbol,
      };
      this.setState(info);
    }
  }

  setCant = index => {
    this.setState({index});
  };

  setLoadApp = obj => {
    this.setState({loadApp: obj});
  };

  onModalVisible = obj => {
    this.setState({modalVisible: obj});
  };

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.blanco,
          height: responsiveHeight(100),
        }}>
        <ModalImagenes
          modalVisible={this.state.modalVisible}
          onModalVisible={this.onModalVisible}
          setLoadApp={this.setLoadApp}
        />
        <Renderload
          setLoadVisible={this.setLoadApp}
          load={this.state.loadApp}
        />
        <RenderHeader
          nav={navigate}
          cantidad={this.state.fotos?.length}
          codigo={this.state.codigo_arbol}
          index={this.state.index}
        />
        <CarouselCards
          data={this.state.fotos}
          setCant={this.setCant}
          modalVisible={this.state.modalVisible}
          onModalVisible={this.onModalVisible}
          setLoadApp={this.setLoadApp}
        />
        <InfoArbol
          dataArbol={this.state.verArbol}
          dataVariables={this.state.variables}
          setLoadApp={this.setLoadApp}
        />
        <Interventions
          data={this.state.intervenciones}
          origen={'Arbol'}
          setLoadApp={this.setLoadApp}
        />
      </SafeAreaView>
    );
  }
}
