import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native';
import {theme} from '../core/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import buscarDatosId from '../helpers/buscarDatosId';
import CarouselCards from '../components/commons/CarruseImagenes/Carrusel';
import Interventions from '../components/commons/CarruselIntervenciones/Interventions';
import RenderHeader from '../components/Arbol/VerArbol/Header';
import InfoZone from '../components/ZonasVerdes/ver/InformacionGeneral';
import Renderload from '../components/Load';

export default class ViewZone extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      codigo: '',
      fotos: [],
      intervenciones: [],
      verZona: {},
      loadApp: false,
    };
  }
  setLoadApp = obj => {
    this.setState({loadApp: obj});
  };

  async componentDidMount() {
    let item = await AsyncStorage.getItem('itemsZone');
    item = item == null ? null : JSON.parse(item);
    let datos = await buscarDatosId(item.id_zona, 'searchZone');
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      fotos: datos.fotos, // datos.fotos,
      intervenciones: datos.intervenciones,
      verZona: datos.verZona,
      codigo: item.codigo,
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
        <Renderload setLoadVisible={this.setLoadApp} load={this.loadApp} />
        <RenderHeader
          nav={this.navig}
          cantidad={this.state.fotos.length}
          codigo={this.state.codigo}
          index={this.state.index}
        />
        <CarouselCards data={this.state.fotos} setCant={this.setCant} />
        <InfoZone verZona={this.state.verZona} />
        <Interventions data={this.state.intervenciones} origen={'Zona Verde'}
                       setLoadApp={this.setLoadApp}/>
      </SafeAreaView>
    );
  }
}
