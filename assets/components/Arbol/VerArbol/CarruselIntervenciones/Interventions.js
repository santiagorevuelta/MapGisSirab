import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {theme} from '../../../../core/theme';
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../../../../core/general';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import buscarDatos from "../../../../helpers/buscarDatos";

let data = [
  {
    intervencion: '1212121',
    tipo: 'tipo fumigacionlelel',
    fecha: '12/20/2025',
    contrato: '22443434',
    operador: 'dcsgdgsdgdf',
    image: 'https://picsum.photos/650',
  },
  {
    intervencion: '565656',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '231323123',
    operador: 'sdadasd',
    image: 'https://picsum.photos/2000',
  },
  {
    intervencion: '44545',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '232131232',
    operador: 'dsasd',
    image: 'https://picsum.photos/1000',
  },
  {
    intervencion: '565656',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '231323123',
    operador: 'sdadasd',
    image: 'https://picsum.photos/950',
  },
];

export default function (props) {
  return (
    <View style={styles.container}>
      {props.length === 0? null:(
        <Text style={[theme.textos.Label, styles.h1]}>
        {'Intervenciones del árbol'}
      </Text>)}
      {props.length === 0? null:(
        <Text style={[theme.textos.Label, styles.h1, styles.content]}>
          {'Total('+props.data.length+')'}
        </Text>)}
      <ScrollView horizontal style={styles.scroll}>
        {rows(props)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    alignItems: 'flex-end',
    marginTop: responsiveHeight(30),
    padding: 10,
  },
  content:{
    justifyContent: 'flex-end',
    alignContent:'flex-end',
    textAlign: 'right',
    width: '95%',

  },
  h1: {
    left: 15,
    top: 0,
    fontSize: responsiveScreenFontSize(1.6),
    position: 'absolute',
  },
  scroll: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  hvArbol: {
    borderRadius: 25,
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    borderColor: theme.colors.primary,
  },
  txtArbol: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

function rows(props) {
  return props.data.map((item, index) => (
    <Card key={'card' + index} style={stylesCards.container}>
      <Card.Content>
        <Text style={stylesCards.title}>
          {'Intervención #' + item.codigo_arbol}
        </Text>
        <View style={stylesCards.header}>
          <Text style={stylesCards.textos}>
            {item.tipo_intervencion.length > 15 ? item.tipo_intervencion.slice(0, 15) + '...' : item.tipo_intervencion}
          </Text>
          <Text style={stylesCards.textos}>{item.fecha}</Text>
        </View>
        <Card.Cover style={stylesCards.image} source={require('../../../../assets/imagen.png')}//ruta_foto_web
        />
      </Card.Content>
      <Card.Actions>
        <Card.Content>
          <Text style={stylesCards.textos}>{'Contrato #' + item.codigo_proyecto}</Text>
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
