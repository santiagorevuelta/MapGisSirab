import {Card} from 'react-native-paper';
import {Text, View} from 'react-native';
import RenderImagen from '../RenderImagenCard';
import React from 'react';

import stylesCards from '../../css/cardsCssIntervencion';
import buscarDatosId from '../../../helpers/buscarDatosId';

export default function Rows({
  data,
  visible,
  setVisible,
  setDataItem,
  setLoadApp,
}) {
  async function consulta(item) {
    setLoadApp(true);
    let id =
      item.id_intervencion !== undefined
        ? item.id_intervencion
        : item.id_intervencion_zona_verde;

    let datos = await buscarDatosId(
      id,
      item.id_intervencion !== undefined
        ? 'searchIntervencion'
        : 'intervencionZonaVerde',
    );
    setDataItem(datos);
    setVisible(!visible);
    setLoadApp(false);
  }

  return data.map((item, index) => (
    <Card
      key={'card' + index}
      style={stylesCards.container}
      onPress={() => {
        setLoadApp(true);
        consulta(item);
      }}>
      <Card.Content>
        <Text style={stylesCards.title}>
          {'Intervención #' +
            (item.id_intervencion !== undefined
              ? item.id_intervencion
              : item.id_intervencion_zona_verde)}
        </Text>
        <View style={stylesCards.header}>
          <Text style={stylesCards.textos}>
            {item.tipo_intervencion.length > 15
              ? item.tipo_intervencion.slice(0, 15) + '...'
              : item.tipo_intervencion}
          </Text>
          <Text style={stylesCards.textos}>{item.fecha}</Text>
        </View>
        <RenderImagen style={stylesCards.image} url={item.ruta_foto_web} />
      </Card.Content>
      <Card.Actions>
        <Card.Content style={stylesCards.footer}>
          <Text style={stylesCards.textos}>
            {'Contrato \n'}
            <Text style={stylesCards.operador}>
              {'#' + item.codigo_proyecto}
            </Text>
          </Text>
          <Text style={stylesCards.operador}>{item.operador}</Text>
        </Card.Content>
      </Card.Actions>
    </Card>
  ));
}
