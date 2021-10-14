module.exports = `
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
    iconUrl: 'https://www.medellin.gov.co/siro_portal/siro_portal/imagenes/icons/puntomapa.png',
    iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
    iconSize: [32, 40],
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 20,
    attribution: '',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

function acctionMap(latlng){
  mymap.setView(latlng, 17);
 // marker.setLatLng(latlng);
  radius.setLatLng(latlng);
}  

var popup = L.popup();

// const marker = L.marker(mymap.getCenter(), {
//     icon: myIcon
// }).addTo(mymap);

const radius = L.circle(mymap.getCenter(), {
    color: "#58D2FF",
    fillColor: "#58D2FF",
    radius: 20
}).addTo(mymap);

  
function onMapClick(e) {
    //popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
    //marker.setLatLng(e.latlng);
    radius.setLatLng(e.latlng);
    window.ReactNativeWebView.postMessage(JSON.stringify({lat:e.latlng.lat,lng:e.latlng.lng}));
}
mymap.on('click', onMapClick);

mymap.on('move', function(e) {
    // marker.setLatLng(mymap.getCenter());
    // radius.setLatLng(mymap.getCenter());
});

mymap.on('moveend', function() {
    let coord = mymap.getCenter();
    let res = L.CRS.EPSG3857.project(coord);
    let coodenadasfinales = {'4326':coord,'3857':{"lat": res.y, "lng":res.x}};
   // window.ReactNativeWebView.postMessage(JSON.stringify(coodenadasfinales));
});


</script>
</body>
</html>`;
