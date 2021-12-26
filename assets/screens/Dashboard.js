import React, {useEffect, useMemo, useState} from 'react';
import {
  limpiarMapaPoints,
  limpiarMapaPolygon,
  MapComponent,
  navigate,
  setCoords,
  stopPolin,
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
import {Platform} from 'react-native';
//import VersionCheck from 'react-native-version-check';

import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

export default function Dashboard({navigation, route}) {
  const [headerHide, setHeaderHide] = useState(false);
  const [option, setOption] = useState('inicio');
  const [optionOld, setOptionOld] = useState(null);
  const bottomSheetRef = React.useRef(null);
  const [indexSnap, setIndexSnap] = useState(1);
  const [snapPoints] = useState(useMemo(() => ['7%', '26%'], []));
  const [snapPointsVer] = useState(
    useMemo(
      () => ['7%', '35%', '70%', Platform.OS === 'ios' ? '95%' : '100%'],
      [],
    ),
  );
  const [snp, setSnp] = useState(snapPoints);

  useEffect(() => {
    return () => {
      consultToken().then(res => {
        if (!res) {
          navigate('LoginScreen');
        }
      });
      stopPolin();
      setCoords().then();
      initial();
    };
  }, [navigation, route]);

  function initial() {
    /*if (Platform.OS !== 'ios') {
      try {
        VersionCheck.needUpdate().then(res => {
          if (res.isNeeded) {
            Alert.alert('Información', 'Nueva actualización disponible');
          }
        });
      } catch (e) {
        console.log('');
      }
    }*/
  }

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
          snp={snp}
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
