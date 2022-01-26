import React, {Component} from 'react';
import {
  getLocalize,
  limpiarMapaPoints,
  limpiarMapaPolygon,
  MapComponent,
  navigate,
  permissionsLocation,
  setCoords,
  stopPolin,
} from '../components/map/BackgroundMap';
import Renderload from '../components/Load';
import {Header} from './indexDashboard';
import BottomSheet from '@gorhom/bottom-sheet';
import {ViewRender} from './Views';
import {Platform} from 'react-native';
import {consultToken} from '../core/general';
import {loadCombos} from '../combos';

class DashboardView extends Component {
  constructor() {
    super();
    this.bottomSheetRef = React.createRef();
    this.mounted = true;
    this.state = {
      loadApp: true,
      option: 'inicio',
      optionOld: null,
      indexSnap: 1,
      snapPoints: ['7%', '26%'],
      snapPointsVer: [
        '7%',
        '35%',
        '70%',
        Platform.OS === 'ios' ? '95%' : '100%',
      ],
      snp: ['7%', '26%'],
    };
  }

  componentDidMount() {
    if (this.mounted) {
      console.log('mounted true');
      this.init().then();
      this.mounted = false;
    } else {
      console.log('mounted false');
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  init = async () => {
    this.setLoadApp(true);
    let res = await consultToken();
    if (!res) {
      navigate('LoginScreen');
      this.setLoadApp(false);
    } else {
      await permissionsLocation();
      await loadCombos();
    }
    stopPolin();
    await setCoords();
    this.setLoadApp(false);
  };

  setOption = data => {
    this.setState({option: data});
  };

  setLoadApp = data => {
    this.setState({loadApp: data});
  };

  setOptionOld = data => {
    this.setState({optionOld: data});
  };

  setIndexSnap = data => {
    this.setState({indexSnap: data});
  };

  setSnp = data => {
    this.setState({snp: data});
  };

  setView = index => {
    if ('Consulta,Ingresar,inicio'.indexOf(index) !== -1) {
      limpiarMapaPolygon();
      limpiarMapaPoints();
      this.setSnp(this.state.snapPoints);
    } else {
      this.setSnp(this.state.snapPointsVer);
    }
    this.setOptionOld(this.state.option);
    this.setOption(index);
    this.setIndexSnap(1);
  };

  tabArbol = name => {
    navigate(name);
  };

  render() {
    return (
      <MapComponent navigation={this.props.navigation}>
        <Renderload
          setLoadVisible={this.setLoadApp}
          load={this.state.loadApp}
        />
        <Header
          setOption={this.setView}
          setIndexSnap={this.setIndexSnap}
          option={this.state.optionOld}
        />
        <BottomSheet
          ref={this.bottomSheetRef}
          index={this.state.indexSnap}
          initialSnapIndex={1}
          keyboardBehavior={'fullScreen'}
          snapPoints={this.state.snp}
          children={() => (
            <ViewRender
              setOption={this.setView}
              type={this.state.option}
              back={this.state.optionOld}
              snp={this.state.snp}
              label={
                this.state.optionOld + ' ' + this.state.option.toLowerCase()
              }
              tabArbol={this.tabArbol}
              setIndexSnap={this.setIndexSnap}
              setLoadApp={this.setLoadApp}
            />
          )}
        />
      </MapComponent>
    );
  }
}

export default DashboardView;
