import React from 'react';
import funciones from './funcionesMapa';
import {Platform} from 'react-native';

let alto = Platform.OS === 'ios'? 90:60;

module.exports = `<!DOCTYPE html>
<html lang="es">
<head>
  <title>MapgisSirab</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.1">
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="Last-Modified" content="0">
  <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="crossorigin="">
  <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>  
  
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
  <script src="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.js"></script>
   <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
   
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
 
</head>
<body style="padding: 0; margin: 0">
<div id="mapid" style="width: 100%; height: 100vh;" />
<style>
    .leaflet-right {
        right: 40px;
    }
    .leaflet-top {
        top: ${alto}px;
    }
    .leaflet-popup,.leaflet-zoom-animated{
        bottom: 30px !important;
    }
</style>
<script>
  const mymap = L.map("mapid", {
    center: [6.2447305, -75.5760133],
    zoom: 12,
    zoomControl: false,
    attributionControl: false,
  });
 
 //https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw
 //http://{s}.tile.osm.org/{z}/{x}/{y}.png
 let capa = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
  var osmBase = L.tileLayer(capa, {
    maxZoom: 22,
    attribution: "",
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);
</script>
${funciones}
</body>
</html>`;
