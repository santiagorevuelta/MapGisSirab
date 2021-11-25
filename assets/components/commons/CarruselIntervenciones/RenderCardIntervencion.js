import {Card} from 'react-native-paper';
import {Text, View} from 'react-native';
import RenderImagen from '../RenderImagenCard';
import React from 'react';

import stylesCards from '../../css/cardsCssIntervencion';

export default function Rows({data, visible, setVisible, setDataItem}) {
  return data.map((item, index) => (
    <Card
      key={'card' + index}
      style={stylesCards.container}
      onPress={() => {
        setDataItem(item);
        setVisible(!visible);
      }}>
      <Card.Content>
        <Text style={stylesCards.title}>
          {'Intervención #' + item.id_intervencion}
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
