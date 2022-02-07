module.exports = `
<script>
    const myIcon = L.icon({
        iconUrl: "data:image/png;base64,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",
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
        mymap.removeLayer(pointArbol);
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
        mymap.removeControl(drawControl);
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
