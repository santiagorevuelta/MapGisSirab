module.exports = `
<script>
  const myIcon = L.icon({
    iconUrl: "https://www.medellin.gov.co/siro_portal/siro_portal/imagenes/icons/puntomapa.png",
    iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
    iconSize: [32, 40],
  });
  
  const popup = L.popup();
  
  const marker = L.marker(mymap.getCenter(), {
    icon: myIcon
  });
  

  const radius = L.circle(mymap.getCenter(), 0,{
      color: "#258B20",
      fillColor: "rgb(125,211,122)",
      radius: 20,
      weight: 2
  })    

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
    marker.addTo(mymap).setLatLng(latlng);
    mymap.setView([latlng[0]- 0.0003,latlng[1]], 20);    
  }

  var layerPoints = []
  
  function acctionMapVerTodo(planes) {
    for (const point of layerPoints ) {
      mymap.removeLayer(point);
    }
    layerPoints = [];
    planes = JSON.parse(planes);
    for (let i = 0; i < planes.length; i++) {
      layerPoints.push(new L.marker([planes[i][1],planes[i][2]],{icon: myIcon}).addTo(mymap));
    }
  }
  
  mymap.on('zoomend', function(e) {
    if(mymap.getZoom() < 18){
      var newRadius = Math.pow((20 - mymap.getZoom()), 3.5);
      radius.setRadius(newRadius); 
    }else{
      var newRadius = Math.pow((mymap.getZoom()), 1);
      radius.setRadius(newRadius); 
    }
  });

  
   const pointLocation = L.circle(mymap.getCenter(), 20,{
      color: "red",
      fillColor: "blue",
      radius: 20,
      weight: 2
  })
  
  let typeCoord = null;
  
  function onMapClickLocation() {
    mymap.on("click", onMapClick);
    typeCoord = 'b';
  }
  
  function acctionMapGetPoint(){ 
     mymap.on("click", onMapClick);
     typeCoord = 'i';
  }
  
  function stops(e) {
    
  }
  
  
    function onMapClick(e) {
      if(typeCoord === 'i'){
         mymap.on("click", stops);
        marker.addTo(mymap);
        //popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
        marker.setLatLng(e.latlng); 
        window.ReactNativeWebView.postMessage(JSON.stringify({lat:e.latlng.lat,lng:e.latlng.lng}));
      }else if (typeCoord === 'b'){
         typeCoord = null;
         mymap.on("click", stops);
         pointLocation.addTo(mymap);
         pointLocation.setLatLng(e.latlng);
         window.ReactNativeWebView.postMessage(JSON.stringify({lat:e.latlng.lat,lng:e.latlng.lng}));
      }
  }
  
    function limpiarMapaPoints(){
       typeCoord = false;
       mymap.removeLayer(layerOld);
       mymap.removeLayer(pointLocation);
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
    type: "Feature",
    properties: "",
    geometry: {}
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
    remove: true
  }
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
//var drawControl = new L.Control.Draw(drawPluginOptions);
//mymap.addControl(drawControl);

var polygon

mymap.on('draw:created', function(e) {
  limpiarDrawPolygon()
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
  
  function stopPolin(){
    polyEdit.disabled();
  }
  
  function limpiarDrawPolygon(){
    editableLayers.removeLayer(polygon);
    mymap.removeLayer(layerOld);
  }
</script>`;
