import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {WebView} from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import ToastAndroid from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid';
let map = null;

const {width, height} = Dimensions.get('window');
function MapComponent({children}) {
  const [location, setLocation] = useState(0);
  permissionsLocation().then(() => {});
  let MapRef = React.createRef();
  setTimeout(function () {
    if (MapRef.current && location === 0) {
      map = MapRef.current;
      getLocalize();
      setLocation(1);
    }
  }, 1000);
  return (
    <View style={{flex: 1}}>
      <WebView
        ref={MapRef}
        onMessage={event => {
          //props.coordinatesFromMap(event.nativeEvent.data);
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
    </View>
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

const getLocalize = () => {
  Geolocation.getCurrentPosition(
    position => {
      let currentLongitude = JSON.stringify(position.coords.longitude);
      let currentLatitude = JSON.stringify(position.coords.latitude);
      map.injectJavaScript(
        `setTimeout(function(){
                mymap.setView([${currentLatitude}, ${currentLongitude}], 17);
            },1000)`,
      );
    },
    error => {
      if (error.code === 2) {
        ToastAndroid.show(
          'Es necesario activar el GPS para poder ubicar adecuadamente tu ubicación',
        );
      } else if (error.code === 3) {
        ToastAndroid.show('No se pudo obtener tu ubicación.');
      } else if (error.code === 1) {
        ToastAndroid.show('Por favor verifique los permisos de localización');
      } else {
        ToastAndroid.show(error);
      }
    },
    {enableHighAccuracy: true, timeout: 25000, maximumAge: 360000},
  );
};

module.exports = {getLocalize, MapComponent};

const html_script = `
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="">
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
 </head>
<body style="padding: 0; margin: 0">
<div id="mapid" style="width: 100%; height: 100vh;"></div>
<script>

const mymap = L.map("mapid", {center: [6.2447305, -75.5760133], zoom: 15, zoomControl: false, attributionControl: false});

const myIcon = L.icon({
    iconUrl: 'https://www.medellin.gov.co/siro/HuecosMed_web/img/iconos/004-pin.png',
    iconAnchor: [21, 42], // point of the icon which will correspond to marker's location 
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 20,
    attribution: '',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

/*const marker = L.marker(mymap.getCenter(), {
    icon: myIcon
}).addTo(mymap);

const radius = L.circle(mymap.getCenter(), {
    color: "#58D2FF",
    fillColor: "#58D2FF",
    radius: 6.0
}).addTo(mymap);*/

	var popup = L.popup();
  
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);

/*
  mymap.on('move', function() {
      marker.setLatLng(mymap.getCenter());
      radius.setLatLng(mymap.getCenter());
  });
  
  mymap.on('moveend', function() {
      let coord = mymap.getCenter();
      let res = L.CRS.EPSG3857.project(coord);
      let coodenadasfinales = {'4326':coord,'3857':{"lat": res.y, "lng":res.x}};
      window.ReactNativeWebView.postMessage(JSON.stringify(coodenadasfinales));
  });
*/

</script>
</body>
</html>`;
