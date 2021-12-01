import React, {useEffect, useMemo, useState} from 'react';
import {
  limpiarMapaPoints,
  limpiarMapaPolygon,
  MapComponent,
  navigate,
  setCoords,
} from '../components/map/BackgroundMap';
import {
  Header,
  ModalIngresarArbol,
  ModalIngresarIntervencion,
  ModalIngresarZonaVerde,
  ModalIntervenciones,
  ModalOptions,
  ModalOptionsArbol,
  ModalOptionsType,
  ModalZonasVerdes,
} from './indexDashboard';
import BottomSheet from '@gorhom/bottom-sheet';
import {consultToken} from '../core/general';
import config from '../tsconfig.json';
import {LogBox, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function Dashboard({navigation}) {
  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState('inicio');
  const [optionOld, setOptionOld] = useState(null);
  const bottomSheetRef = React.useRef(null);
  const [indexSnap, setIndexSnap] = useState(1);
  const [snapPoints] = useState(useMemo(() => ['3%', '26%'], []));
  const [snapPointsVer] = useState(
    useMemo(
      () => ['3%', '33%', '70%', Platform.OS === 'ios' ? '95%' : '100%'],
      [],
    ),
  );
  const [snp, setSnp] = useState(snapPoints);

  useEffect(() => {
    let paramsMap = navigation.getState();
    console.log(paramsMap.params);
    consultToken().then(res => {
      if (res) {
        return;
      }
      navigate('LoginScreen');
    });
    setCoords().then();
    AsyncStorage.setItem('variables', '');
  }, [navigation]);

  const setView = index => {
    if ('Consulta,Ingresar,inicio'.indexOf(index) !== -1) {
      limpiarMapaPolygon();
      limpiarMapaPoints();
      setSnp(snapPoints);
    } else {
      setSnp(snapPointsVer);
    }
    setOptionOld(option);
    setOption(index);
    setIndexSnap(1);
  };

  const tabArbol = (name, params = {}) => {
    navigate(name, {option: option, optionOld: optionOld, ...params}, 1);
  };

  return (
    <MapComponent navigation={navigation}>
      {!headerHide && (
        <Header setOption={setView} setIndexSnap={setIndexSnap} />
      )}
      <BottomSheet
        ref={bottomSheetRef}
        key={'busqueda'}
        onChange={index => {
          setHeaderHide(index === snapPointsVer.length - 1);
        }}
        index={indexSnap}
        initialSnapIndex={1}
        keyboardBehavior={'fullScreen'}
        style={{marginBottom: responsiveScreenHeight(5)}}
        snapPoints={snp}>
        <ViewRender
          setOption={setView}
          type={option}
          back={optionOld}
          label={optionOld + ' ' + option.toLowerCase()}
          tabArbol={tabArbol}
          setIndexSnap={setIndexSnap}
        />
      </BottomSheet>
    </MapComponent>
  );
}

function ViewRender(props) {
  if (props.type === 'inicio') {
    return <ModalOptions {...props} />;
  } else if ('Consulta,Ingresar'.indexOf(props.type) !== -1) {
    return <ModalOptionsType {...props} />;
  } else {
    if (props.back === 'Consulta') {
      switch (props.type) {
        case config.home[0].label:
          return <ModalOptionsArbol {...props} />;
        case config.home[1].label:
          return <ModalIntervenciones {...props} />;
        case config.home[2].label:
          return <ModalZonasVerdes {...props} />;
      }
    } else {
      props.setIndexSnap(3);
      switch (props.type) {
        case config.home[0].label:
          return <ModalIngresarArbol {...props} />;
        case config.home[1].label:
          return <ModalIngresarIntervencion {...props} />;
        case config.home[2].label:
          return <ModalIngresarZonaVerde {...props} />;
      }
    }
  }
}
