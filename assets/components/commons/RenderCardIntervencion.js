import {Card} from 'react-native-paper';
import {Pressable, Text, View} from 'react-native';
import RenderImagen from './RenderImagenCard';
import {theme} from '../../core/theme';
import React from 'react';

import stylesCards from '../../components/css/cardsCssIntervencion';

export default function Rows({data, visible, setVisible, setDataItem}) {
  return data.map((item, index) => (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? theme.pressed : theme.offPressed},
        {borderRadius: theme.radius},
      ]}
      onPress={() => {
        setDataItem(item);
        setVisible(!visible);
      }}>
      <Card key={'card' + index} style={stylesCards.container}>
        <Card.Content>
          <Text style={stylesCards.title}>
            {'# ' +
              (item.codigo_arbol ? item.codigo_arbol : item.codigo_zona_verde)}
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
          <Card.Content>
            <Text style={stylesCards.textos}>
              {'Contrato #' + item.codigo_proyecto}
            </Text>
            <Text style={stylesCards.operador}>{item.operador}</Text>
          </Card.Content>
        </Card.Actions>
      </Card>
    </Pressable>
  ));
}
