import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import {notifyMessage} from '../../core/general';
import html_script from './html_script';
import AsyncStorage from '@react-native-async-storage/async-storage';

let MapRef = React.createRef();
const {width, height} = Dimensions.get('window');

function MapComponent({children}) {
  const [location, setLocation] = useState(0);
  useEffect(() => {
    permissionsLocation().then(() => {});
    setTimeout(function () {
      if (MapRef.current && location === 0) {
        getLocalize(true);
        setLocation(1);
      }
    }, 100);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <StatusBar barStyle="light-content" />
      <WebView
        ref={MapRef}
        onMessage={event => {
          let data = event.nativeEvent.data;
          AsyncStorage.setItem('coords', data);
        }}
        source={{
          html: html_script,
        }}
        javaScriptEnabledAndroid={true}
        javaScriptEnabled={true}
        injectedJavaScript={null}
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
    </SafeAreaView>
  );
}

async function permissionsLocation() {
  if (Platform.OS !== 'ios') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        await permissionsLocation();
      }
    } catch (err) {}
  }
}

const options = {
  enableHighAccuracy: true,
  timeout: 25000,
  maximumAge: 360000,
};

// {enableHighAccuracy: true, timeout: 25000, maximumAge: 360000},

const getLocalize = (autoPos = false) => {
  Geolocation.getCurrentPosition(success, error, options);
};

function success(position) {
  let currentLongitude = JSON.stringify(position.coords.longitude);
  let currentLatitude = JSON.stringify(position.coords.latitude);
  if (!MapRef.current) {
    return;
  }
  let ubucacui = JSON.stringify({lat: currentLatitude, lng: currentLongitude});
  AsyncStorage.setItem('ubicacion', ubucacui);
  MapRef.current.injectJavaScript(
    `setTimeout(function(){
        acctionMap([${currentLatitude}, ${currentLongitude}])
    },100)`,
  );
}

function error(err) {
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

function verEnMapa(lat, lng) {
  if (!MapRef.current) {
    return;
  }
  MapRef.current.injectJavaScript(
    `setTimeout(function(){
        acctionMapVer([${lat},${lng}])
    },100)`,
  );
}

function verEnMapaAllPoint(response) {
  if (!MapRef.current) {
    return;
  }
  let coords = [];
  for (const responseElement of response) {
    coords.push([
      responseElement.codigo_arbol,
      parseFloat(responseElement.latitud),
      parseFloat(responseElement.longitud),
    ]);
  }
  coords = JSON.stringify(coords);
  MapRef.current.injectJavaScript(
    `acctionMapVerTodo(${JSON.stringify(coords)})`,
  );
}

function verEnMapaP(coords) {
  if (!MapRef.current) {
    return;
  }
  MapRef.current.injectJavaScript(
    `acctionMapVerPoly(${JSON.stringify(coords)})`,
  );
}

function limpiarMapa() {
  if (!MapRef.current) {
    return;
  }
  if (Platform.OS === 'android') {
    MapRef.current.reload();
  }
}

async function setCoords() {
  if (!MapRef.current) {
    return [];
  }
  let data = await AsyncStorage.getItem('ubicacion');
  data = data == null ? {} : JSON.parse(data);
  MapRef.current.injectJavaScript(
    `acctionMap([${data.lat}, ${data.lng}],true)`,
  );
}

function drawPolin() {
  if (!MapRef.current) {
    return [];
  }
  MapRef.current.injectJavaScript('drawPolin()');
}

module.exports = {
  getLocalize,
  MapComponent,
  verEnMapa,
  verEnMapaP,
  verEnMapaAllPoint,
  limpiarMapa,
  setCoords,
  drawPolin,
};
