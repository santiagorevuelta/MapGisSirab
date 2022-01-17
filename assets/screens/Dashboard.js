import React, {useEffect, useMemo, useState} from 'react';
import {
  limpiarMapaPoints,
  limpiarMapaPolygon,
  MapComponent,
  navigate,
  setCoords,
  stopPolin,
} from '../components/map/BackgroundMap';
import {Header} from './indexDashboard';
import BottomSheet from '@gorhom/bottom-sheet';
import {consultToken} from '../core/general';
import {Platform} from 'react-native';
//import VersionCheck from 'react-native-version-check';

import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import Renderload from '../components/Load';
import {loadCombos} from '../combos';
import {ViewRender} from './Views';

export default function Dashboard({navigation, route}) {
  const bottomSheetRef = React.useRef(null);
  const [loadApp, setLoadApp] = useState(true);
  const [cargaInicial, setCargaInicial] = useState(false);
  const [option, setOption] = useState('inicio');
  const [optionOld, setOptionOld] = useState(null);
  const [indexSnap, setIndexSnap] = useState(1);
  const [snapPoints] = useState(useMemo(() => ['7%', '26%'], []));
  const [snapPointsVer] = useState(
    useMemo(
      () => ['7%', '35%', '70%', Platform.OS === 'ios' ? '95%' : '100%'],
      [],
    ),
  );
  const [snp, setSnp] = useState(snapPoints);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (!cargaInicial) {
      setCargaInicial(true);
      let res = await consultToken();
      if (!res) {
        navigate('LoginScreen');
      } else {
        await loadCombos();
      }
      setLoadApp(false);
    }
    return () => {
      stopPolin();
      setCoords();
      initial();
    };
  }, [cargaInicial, navigation]);

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
      <Renderload setLoadVisible={setLoadApp} load={loadApp} />
      <Header
        setOption={setView}
        setIndexSnap={setIndexSnap}
        option={optionOld}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={indexSnap}
        initialSnapIndex={1}
        keyboardBehavior={'fullScreen'}
        style={{marginBottom: responsiveScreenHeight(5), elevation: 1}}
        snapPoints={snp}
        children={() => (
          <ViewRender
            setOption={setView}
            type={option}
            back={optionOld}
            snp={snp}
            label={optionOld + ' ' + option.toLowerCase()}
            tabArbol={tabArbol}
            setIndexSnap={setIndexSnap}
            setLoadApp={setLoadApp}
          />
        )}
      />
    </MapComponent>
  );
}
