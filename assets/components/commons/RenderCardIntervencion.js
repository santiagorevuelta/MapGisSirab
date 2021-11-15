import {Card} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RenderImagen from './RenderImagenCard';
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../core/theme';
import React from 'react';

export default function Rows({data, visible, setVisible, setDataItem}) {
  return data.map((item, index) => (
    <Card key={'card' + index} style={stylesCards.container}>
      <Card.Content>
        <Text style={stylesCards.title}>{'# ' + item.codigo_arbol}</Text>
        <View style={stylesCards.header}>
          <Text style={stylesCards.textos}>
            {item.tipo_intervencion.length > 15
              ? item.tipo_intervencion.slice(0, 15) + '...'
              : item.tipo_intervencion}
          </Text>
          <Text style={stylesCards.textos}>{item.fecha}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setDataItem(item);
            setVisible(!visible);
          }}>
          <RenderImagen style={stylesCards.image} url={item.ruta_foto_web} />
        </TouchableOpacity>
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
  ));
}

const stylesCards = StyleSheet.create({
  container: {
    width: responsiveWidth(45),
    height: responsiveWidth(47),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.border,
    paddingBottom: responsiveScreenFontSize(1.2),
    margin: 5,
  },
  title: {
    fontSize: responsiveScreenFontSize(1.4),
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textos: {
    fontSize: responsiveScreenFontSize(1.2),
  },
  image: {
    borderRadius: theme.radius,
    height: responsiveWidth(25),
  },
  footer: {},
  operador: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
    fontSize: responsiveScreenFontSize(1.5),
  },
});
