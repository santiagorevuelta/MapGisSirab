import React, {useState} from 'react';
import {View, Dimensions, Platform, PermissionsAndroid, StatusBar, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import {notifyMessage} from '../../core/general';
let MapRef = React.createRef();
const {width, height} = Dimensions.get('window');
import Animated from 'react-native-reanimated';
import html_script from './html_script';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MapComponent({children}) {
  const [location, setLocation] = useState(0);
  permissionsLocation().then(() => {});
  setTimeout(function () {
    if (MapRef.current && location === 0) {
      getLocalize();
      setLocation(1);
    }
  }, 100);
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
          <StatusBar barStyle='light-content' />
          <WebView
            ref={MapRef}
            onMessage={event => {
              let coords = JSON.parse(event.nativeEvent.data);
              AsyncStorage.setItem('coords', event.nativeEvent.data);
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
  timeout: 1000,
  maximumAge: 2000,
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

module.exports = {getLocalize, MapComponent};
