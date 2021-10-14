import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../../../../core/general';

let data = [
  {
    intervencion: '1212121',
    tipo: 'tipo fumigacionlelel',
    fecha: '12/20/2025',
    contrato: '22443434',
    operador: 'dcsgdgsdgdf',
    image:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg',
  },
  {
    intervencion: '565656',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '231323123',
    operador: 'sdadasd',
    image:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg',
  },
  {
    intervencion: '44545',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '232131232',
    operador: 'dsasd',
    image:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg',
  },
  {
    intervencion: '565656',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '231323123',
    operador: 'sdadasd',
    image:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg',
  },
  {
    intervencion: '44545',
    tipo: 'tipo fumigacion',
    fecha: '12/20/2025',
    contrato: '232131232',
    operador: 'dsasd',
    image:
      'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg',
  },
];

export default function (props) {
  return (
    <View style={styles.container}>
      <Text style={[theme.textos.Label, styles.h1]}>
        {'Intervenciones del árbol'}
      </Text>
      <ScrollView horizontal style={styles.scroll}>
        {rows(props)}
      </ScrollView>
      <Pressable
        style={styles.hvArbol}
        onPress={() => {
          notifyMessage('Holi');
        }}>
        <Text style={styles.txtArbol}>{'Hv árbol'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blanco,
    alignItems: 'flex-end',
    marginTop: responsiveHeight(30),
    padding: 10,
  },
  h1: {
    left: 15,
    top: 0,
    fontSize: responsiveScreenFontSize(1.6),
    position: 'absolute',
  },
  scroll: {
    paddingTop: 10,
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
  return data.map((item, index) => (
    <View style={stylesCards.container} key={index}>
      <Text style={stylesCards.title}>
        {'Intervención #' + item.intervencion}
      </Text>
      <View style={stylesCards.header}>
        <Text style={stylesCards.textos}>
          {item.tipo.length > 14 ? item.tipo.slice(0, 14) + '...' : item.tipo}
        </Text>
        <Text style={stylesCards.textos}>{item.fecha}</Text>
      </View>
      <Image source={{uri: item.image}} style={stylesCards.image} />
      <Text style={stylesCards.textos}>{'Contrato #' + item.contrato}</Text>
      <Text style={stylesCards.operador}>{item.operador}</Text>
    </View>
  ));
}

const stylesCards = StyleSheet.create({
  container: {
    width: responsiveWidth(40),
    height: responsiveWidth(45),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.border,
    margin: 10,
    marginLeft: 0,
    padding: 5,
    paddingHorizontal: 10,
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
    flex: 1,
    justifyContent: 'center',
    borderRadius: 25,
    height: 'auto',
    resizeMode: 'contain',
  },
  footer: {},
  operador: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
    fontSize: responsiveScreenFontSize(1.5),
  },
});
