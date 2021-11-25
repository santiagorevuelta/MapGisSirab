module.exports = `<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="">
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""></script>
  <script src="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.js"></script>
  <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
  
</head>
<body style="padding: 0; margin: 0">
<div id="mapid" style="width: 100%; height: 100vh;"></div>
<script>
  const mymap = L.map("mapid", {
    center: [6.2447305, -75.5760133],
    zoom: 12,
    zoomControl: false,
    attributionControl: false,
  });


  const myIcon = L.icon({
    iconUrl: "https://www.medellin.gov.co/siro_portal/siro_portal/imagenes/icons/puntomapa.png",
    iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
    iconSize: [32, 40],
  });
  
   const myPerson = L.icon({
    iconUrl: "https://img.telecamiseta.com/designs/1/111.png",//"https://www.seekpng.com/png/full/310-3101423_mircoles-26-de-agosto-de-persona-pensando-animado.png",
    iconAnchor: [25, 80], // point of the icon which will correspond to marker's location
    iconSize: [100, 100],
  });
  
  //https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw
 
 let capa = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
 
  var osmBase = L.tileLayer(capa, {
    maxZoom: 20,
    minZoom: 12,
    attribution: "",
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);


  function acctionMap(latlng) {
    radius.addTo(mymap);
    radius.setLatLng(latlng);
    mymap.setView(latlng, 19);
  }

  function acctionMapVer(latlng) {
    mymap.removeLayer(layerOld);
    // for (const point of layerPoints) {
    //   mymap.removeLayer(point);
    // }    
    marker.addTo(mymap);
    mymap.setView(latlng, 17);
    marker.setLatLng(latlng);    
  }

  var layerPoints = []
  
  function acctionMapVerTodo(planes) {
    for (const point of layerPoints ) {
      mymap.removeLayer(point);
    }    
    planes = JSON.parse(planes);
    for (let i = 0; i < planes.length; i++) {
      layerPoints.push(new L.marker([planes[i][1],planes[i][2]],{icon: myIcon}).bindPopup(planes[i][0]).addTo(mymap));
    }
  }

  const popup = L.popup();
  
  const marker = L.marker(mymap.getCenter(), {
    icon: myIcon
  });
  
  const markerPerson = L.marker(mymap.getCenter(), {
    icon: myPerson
  });
  

  const radius = L.circle(mymap.getCenter(), 20,{
      color: "#258B20",
      fillColor: "rgb(125,211,122)",
      radius: 20,
      weight: 2
  })
  
  mymap.on('zoomend', function(e) {
    if(mymap.getZoom() < 19){
      var newRadius = Math.pow((20 - mymap.getZoom()), 3.5);
      radius.setRadius(newRadius); 
    }else{
      var newRadius = Math.pow((mymap.getZoom()), 1);
      radius.setRadius(newRadius); 
    }
  });

  function onMapClick(e) {
    marker.addTo(mymap);
    //popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
    marker.setLatLng(e.latlng);
    window.ReactNativeWebView.postMessage(JSON.stringify({lat:e.latlng.lat,lng:e.latlng.lng}));
  }
  
  
  function acctionMapGetPoint(){
     mymap.on("click", onMapClick);
     marker.addTo(mymap);
  }
  
    function limpiarMapaPoints(){
       mymap.removeLayer(layerOld);
       for (const point of layerPoints ) {
        mymap.removeLayer(point);
      } 
   }
  

  mymap.on("move", function(e) {
    // marker.setLatLng(mymap.getCenter());
    // radius.setLatLng(mymap.getCenter());
  });


  mymap.on("moveend", function() {
    let coord = mymap.getCenter();
    let res = L.CRS.EPSG3857.project(coord);
    let coodenadasfinales = { "4326": coord, "3857": { "lat": res.y, "lng": res.x } };
    //window.ReactNativeWebView.postMessage(JSON.stringify(coodenadasfinales));
  });


  //pintar un poligono
  
  var geojsonFeaturePolygon = [{
    "type": "Feature",
    "properties": "",
    "geometry": {}
  }];
  
  var layerOld = {}
  
  function acctionMapVerPoly(coords, fillColor = "#258B20",color = "red") {
    mymap.removeLayer(layerOld);
    geojsonFeaturePolygon[0].geometry = JSON.parse(coords);
     layerOld = new L.geoJson(geojsonFeaturePolygon, {
      style: function(feature) {
        return {
          weight: 1.3, // grosor de línea
          color: color, // color de línea
          opacity: 1, // tansparencia de línea
          fillColor: fillColor, // color de relleno
          fillOpacity: 0.3, // transparencia de relleno
        };
      },
    }).addTo(mymap);
    mymap.fitBounds(layerOld.getBounds());
  }


</script>
<script>


var editableLayers = new L.FeatureGroup();
mymap.addLayer(editableLayers);

var drawPluginOptions = {
    position: 'topright',
  draw: {
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects
        message: '<strong>Oh snap!<strong> you can\\'t draw that!' // Message that will show when intersect
      },
      shapeOptions: {
        color: '#97009c'
      },
      metric: ['m']
    },
    // disable toolbar item by setting it to false
    polyline: false,
    circle: false, // Turns off this drawing tool
    rectangle: false,
    marker: false,
    circlemarker: false
    },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: false
  }
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw(drawPluginOptions);
//mymap.addControl(drawControl);

var editableLayers = new L.FeatureGroup();
mymap.addLayer(editableLayers);

var polygon

mymap.on('draw:created', function(e) {
  var type = e.layerType,
    layer = e.layer;
  
  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }
    var seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs());
   window.ReactNativeWebView.postMessage(JSON.stringify([layer.getLatLngs(),seeArea]));
   editableLayers.addLayer(layer);
   polygon = layer;
});

  function drawPolin(){
    mymap.on("click", ()=>{});
    var polyEdit = new L.Draw.Polygon(mymap);
    polyEdit.enable();
    //polyEdit.addVertex(e.latlng);
  }
  
  
  function limpiarDrawPolygon(){
    editableLayers.removeLayer(polygon);
    mymap.removeLayer(layerOld);
  }
  
</script>
</body>
</html>`;
