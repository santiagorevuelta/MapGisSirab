import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import html_script from './html_script';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../tsconfig.json';

export function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  } else {
    Alert.alert(msg);
  }
}

let MapRef = React.createRef();
const {width, height} = Dimensions.get('window');
let nav = null;

export function MapComponent({navigation, children}) {
  nav = navigation;
  return (
    <>
      <WebView
        ref={MapRef}
        onMessage={event => {
          try {
            let data = event.nativeEvent.data;
            let count = JSON.parse(data);
            if (count.length > 1) {
              if (count[2] === 'polygon') {
                AsyncStorage.setItem('polygon', JSON.stringify(count[0]));
                AsyncStorage.setItem('area', count[1] + '');
              } else if (count[2] === 'arbol') {
                AsyncStorage.setItem('items', JSON.stringify(count[0]));
                navigate(config.home[0].items.ver);
              } else if (count[2] === 'zona') {
                AsyncStorage.setItem('itemsZone', JSON.stringify(count[0]));
                navigate(config.home[2].items.ver);
              }
            } else {
              AsyncStorage.setItem('coords', data);
            }
          } catch (e) {
            AsyncStorage.setItem('polygon', '');
            AsyncStorage.setItem('coords', '');
          }
        }}
        source={{
          html: html_script,
        }}
        style={{
          height: height,
          width: width,
          margin: 0,
          padding: 0,
          zIndex: 0,
          backgroundColor: '#fff',
        }}
      />
      {children}
    </>
  );
}

export async function permissionsLocation() {
  if (Platform.OS !== 'ios') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        await permissionsLocation();
      }
      getLocalize();
    } catch (err) {}
  } else {
    getLocalize();
  }
}

const options = {
  enableHighAccuracy: true,
  timeout: 25000,
  maximumAge: 360000,
};

export const getLocalize = () => {
  Geolocation.getCurrentPosition(success, error, options);
};

export function success(position) {
  let currentLongitude = JSON.stringify(position.coords.longitude);
  let currentLatitude = JSON.stringify(position.coords.latitude);
  if (!MapRef.current) {
    return;
  }
  let ubucacui = JSON.stringify({lat: currentLatitude, lng: currentLongitude});
  AsyncStorage.setItem('ubicacion', ubucacui);
  const injected = `
    acctionMap([${currentLatitude}, ${currentLongitude}])
    true;
  `;
  MapRef.current.injectJavaScript(injected);
}

export function error(err) {
  if (err.code === 2) {
    notifyMessage(
      'Es necesario activar el GPS para poder ubicar adecuadamente tu ubicación',
    );
  } else if (err.code === 3) {
    notifyMessage('No se pudo obtener tu ubicación.');
  } else if (err.code === 1) {
    notifyMessage('Por favor verifique los permisos de localización');
  } else {
    notifyMessage(err);
  }
}

export function navigate(name, params = {}, index = 0) {
  nav.navigate(name, params);
}

export function verEnMapa(lat, lng) {
  if (!MapRef.current) {
    return;
  }
  const injected = `
    acctionMapVer([${lat},${lng}]);
    true;
  `;
  MapRef.current.injectJavaScript(injected);
}

export function verEnMapaAllPoint(response) {
  if (!MapRef.current) {
    return;
  }
  let coords = [];
  for (const responseElement of response) {
    coords.push([
      responseElement,
      parseFloat(responseElement.latitud),
      parseFloat(responseElement.longitud),
    ]);
  }
  coords = JSON.stringify(coords);
  const injected = `
    acctionMapVerTodo(${JSON.stringify(coords)});
    true;
  `;
  MapRef.current.injectJavaScript(injected);
}

export function verEnMapaP(coords, items) {
  if (!MapRef.current) {
    return;
  }
  const injected = `
    acctionMapVerPoly(${JSON.stringify(
      coords,
    )},'#258B20','red',${JSON.stringify(items)});
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function limpiarMapa() {
  if (!MapRef.current) {
    return;
  }
  limpiarMapaPolygon();
  limpiarMapaPoints();
  removeControl();
  if (Platform.OS === 'android') {
    //MapRef.current.reload();
  }
  setTimeout(() => {
    setCoords().then();
  }, 1000);
}

export async function setCoords() {
  if (!MapRef.current) {
    return;
  }
  let data = await AsyncStorage.getItem('ubicacion');
  data = data == null ? {} : JSON.parse(data);
  const injected = `
    acctionMap([${data.lat}, ${data.lng}],true);
    true;
  `;
  MapRef.current.injectJavaScript(injected);
}

export function getPoint() {
  if (!MapRef.current) {
    return [];
  }

  const injected = `
    acctionMapGetPoint();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function stopPoint() {
  if (!MapRef.current) {
    return [];
  }
  const injected = `
    acctionMapstopPoint();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function drawPolin() {
  if (!MapRef.current) {
    return [];
  }
  AsyncStorage.setItem('polygon', '');
  AsyncStorage.setItem('area', '');
  const injected = `
    drawPolin();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function stopPolin() {
  if (!MapRef.current) {
    return;
  }
  AsyncStorage.setItem('polygon', '');
  const injected = `
    stopPolin();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function limpiarMapaPolygon() {
  if (!MapRef.current) {
    return [];
  }
  AsyncStorage.setItem('polygon', '');
  const injected = `
    limpiarDrawPolygon();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}
export function removeControl() {
  if (!MapRef.current) {
    return [];
  }
  AsyncStorage.setItem('polygon', '');
  const injected = `
    removeControl();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function limpiarMapaPoints() {
  if (!MapRef.current) {
    return [];
  }
  const injected = `
    limpiarMapaPoints();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}

export function onMapClickLocation() {
  if (!MapRef.current) {
    return [];
  }
  const injected = `
    onMapClickLocation();
    true;
  `;

  MapRef.current.injectJavaScript(injected);
}
