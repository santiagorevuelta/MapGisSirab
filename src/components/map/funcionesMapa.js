module.exports = `
<script>
    const myIcon = L.icon({
        iconUrl: "https://www.medellin.gov.co/siro_portal/siro_portal/imagenes/icons/puntomapa.png",
        iconAnchor: [17, 38], // point of the icon which will correspond to marker's location
        iconSize: [32, 40],
    });

    const myIcons = L.icon({
        iconUrl: "https://icones.pro/wp-content/uploads/2021/04/icone-cercle-vert.png",
        iconAnchor: [30, 35],
        iconSize: [60, 60],
    });

    const marker = L.marker(mymap.getCenter(), {icon: myIcon});
    const radius = L.marker(mymap.getCenter(), {icon: myIcons})


    var editableLayers = new L.FeatureGroup();
    mymap.addLayer(editableLayers);


    const drawPluginOptions = {
        position: 'topright',
        draw: {
            polygon: false,
            polyline: false,
            circle: false,
            rectangle: false,
            marker: false,
            circlemarker: false
        },
        edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: false,
            edit: false
        }
    };

    const pointLocation = L.circle(mymap.getCenter(), 20, {
        color: "red",
        fillColor: "blue",
        radius: 20,
        weight: 2
    })

    let typeCoord = null;

    let layerPoints = [];
    let pointArbol;
    
    //pintar un poligono

    const geojsonFeaturePolygon = [{
        type: "Feature",
        properties: "",
        geometry: {}
    }];

    let layerOld = {};

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    let drawControl = new L.Control.Draw(drawPluginOptions);
    let polygon;


    const polyEdit = new L.Draw.Polygon(mymap);
    L.Draw.Polyline.prototype._onTouch = L.Util.falseFn;

    function acctionMap(latlng) {
        radius.addTo(mymap);
        radius.setLatLng(latlng);
        //radius.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
        mymap.setView(latlng, 19);
    }

    function acctionMapVer(latlng) {
        mymap.removeLayer(layerOld);
        // for (const point of layerPoints) {
        //   mymap.removeLayer(point);
        // }
        marker.addTo(mymap).setLatLng(latlng);
        mymap.setView([latlng[0] - 0.0003, latlng[1]], 20);
    }


    function acctionMapVerTodo(planes) {
        for (const point of layerPoints) {
            mymap.removeLayer(point);
        }
        layerPoints = [];
        planes = JSON.parse(planes);
        for (let i = 0; i < planes.length; i++) {
            let item = planes[i][0]
            let mrkr = new L.marker([planes[i][1], planes[i][2]], {icon: myIcon}).addTo(mymap);
            mrkr.bindPopup("<b>" + item.codigo_arbol + "</b><br>" +
                "<a onclick='abrir(" + JSON.stringify(item) + ",1)'>" +
                "Estado: " + item.estado + "<br>" +
                "Tipo árbol: " + item.tipo_arbol + "<br>" +
                "</a>")
            mrkr.on('click', (e) => {
                mymap.setView(e.latlng, 12);
            })
            layerPoints.push(mrkr);
        }
        mymap.setView([6.2447305, -75.5760133], 12);
    }

    function abrir(items, tipo) {
        window.ReactNativeWebView.postMessage(JSON.stringify([items, '', tipo === 1 ? 'arbol' : 'zona']));
    }


    function onMapClickLocation() {
        mymap.on("click", onMapClick);
        typeCoord = 'b';
    }


    function onMapClick(e) {
        if (typeCoord === 'i') {
            typeCoord = null;
            mymap.on("click", stops);
            pointLocation.addTo(mymap);
            pointLocation.setLatLng(e.latlng);
            window.ReactNativeWebView.postMessage(JSON.stringify({lat: e.latlng.lat, lng: e.latlng.lng}));
        }
    }

    function limpiarMapaPoints() {
        typeCoord = false;
        mymap.removeLayer(layerOld);
        mymap.removeLayer(pointLocation);
        for (const point of layerPoints) {
            mymap.removeLayer(point);
        }
    }


    function acctionMapVerPoly(coords, fillColor = "#258B20", color = "red", items) {
        mymap.removeLayer(layerOld);
        geojsonFeaturePolygon[0].geometry = JSON.parse(coords);
        layerOld = new L.geoJson(geojsonFeaturePolygon, {
            style: function (feature) {
                return {
                    weight: 1.3, // grosor de línea
                    color: color, // color de línea
                    opacity: 1, // tansparencia de línea
                    fillColor: fillColor, // color de relleno
                    fillOpacity: 0.3, // transparencia de relleno
                };
            },
        }).addTo(mymap);
        layerOld.bindPopup("<b>Zona verde!</b><br><a onclick='abrir(" + JSON.stringify(items) + ",2)'>" + items.codigo + "</a>")
        mymap.fitBounds(layerOld.getBounds());
    }


    mymap.on('draw:created', function (e) {
        mymap.removeLayer(editableLayers)
        const type = e.layerType,
            layer = e.layer;
        if (type === 'marker') {
            pointArbol = layer;
            mymap.removeControl(drawControl);
            window.ReactNativeWebView.postMessage(JSON.stringify({lat:e.layer.getLatLng().lat,lng:e.layer.getLatLng().lng}));
        } else if (type === 'polygon') {
            let seeArea = 0
            for (const x of layer.getLatLngs()) {
              seeArea = seeArea+L.GeometryUtil.geodesicArea(x)
            }          
             window.ReactNativeWebView.postMessage(JSON.stringify([layer.getLatLngs(),seeArea,'polygon']));
            polygon = layer;
        }
        editableLayers.addLayer(layer);
        mymap.addLayer(layer);
    });

    mymap.on('draw:edited', function (e) {
        const layers = e.layers;
        layers.eachLayer(function (layer) {
             let seeArea = 0
            for (const x of layer.getLatLngs()) {
              seeArea = seeArea+L.GeometryUtil.geodesicArea(x)
            }
            window.ReactNativeWebView.postMessage(JSON.stringify([layer.getLatLngs(),seeArea,'polygon']));
            polygon = layer;
        });
    });


    function acctionMapGetPoint() {
        acctionMapstopPoint()
        drawPluginOptions.draw.polygon = false;
        drawPluginOptions.draw.marker = {icon: myIcon};
        drawControl = new L.Control.Draw(drawPluginOptions);
        mymap.addControl(drawControl);
        window.document.getElementsByClassName("leaflet-draw-draw-marker")[0].click();
    }

    function acctionMapstopPoint(){
       if (pointArbol !== undefined) {
            mymap.removeLayer(pointArbol)
        }
        mymap.removeControl(drawControl);
    }

    function drawPolin() {
        stopPolin()
        drawControl.options.draw.marker = false;
        drawControl.options.draw.polygon = {
            allowIntersection: false,
            drawError: {
                color: '#e1e100',
                message: '<strong>¡Oh!<strong> ¡no puedes dibujar eso!'
            },
            shapeOptions: {
                color: '#258B20'
            },
            metric: ['m']
        }
        drawControl = new L.Control.Draw(drawPluginOptions)
        mymap.addControl(drawControl);
        window.document.getElementsByClassName("leaflet-draw-draw-polygon")[0].click()
    }

    function stopPolin() {
        if (polygon !== undefined) {
            mymap.removeLayer(polygon)
        }
        mymap.removeControl(drawControl);
    }
    

    function limpiarDrawPolygon() {
        if (polygon !== undefined) {
            mymap.removeLayer(polygon)
        }
        if (layerOld !== undefined) {
            mymap.removeLayer(layerOld)
        }
    }

</script>
`;
