import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import {notifyMessage} from '../../core/general';

export default props => {
  return (
    <Animated.View style={styles.container}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        {Mycard(props)}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
  txtRes: {
    paddingBottom: '5%',
    fontSize: responsiveFontSize(1.8),
  },
});

function Mycard(props) {
  let data = [
    {uri: 'https://picsum.photos/900', codigo: '45454'},
    {uri: 'https://picsum.photos/500', codigo: '5454'},
    {uri: 'https://picsum.photos/600', codigo: '2424'},
    {uri: 'https://picsum.photos/1000', codigo: '4487489'},
    {uri: 'https://picsum.photos/700', codigo: '4494849849'},
  ];
  return data.map((item, index) => (
    <Card key={'card' + index} style={styleCard.container}>
      <Title style={[theme.textos.Label, styleCard.title]}>
        Código {item.codigo}
      </Title>
      <Card.Content>
        <Pressable
          onPress={() => {
            AsyncStorage.setItem('codigo', item.codigo);
            props.tabArbol('ViewTree');
          }}>
          <Paragraph style={[theme.textos.Textos, styleCard.tipo]}>
            Aguacatus arboles - fat
          </Paragraph>
          <Card.Cover style={styleCard.image} source={{uri: item.uri}} />
        </Pressable>
      </Card.Content>
      <Card.Actions>
        <Card.Content>
          <Paragraph style={[theme.textos.Textos, styleCard.date]}>
            10/12/2001
          </Paragraph>
        </Card.Content>
        <Button
          labelStyle={styleCard.labelStyle}
          style={styleCard.buttons}
          mode={'contained'}
          icon="file-download-outline"
          color={theme.colors.primary}
          onPress={() => {
            notifyMessage('file');
          }}
        />
        <Button
          labelStyle={styleCard.labelStyle}
          style={styleCard.buttons}
          mode={'outlined'}
          icon="pencil-outline"
          color={theme.colors.primary}
          compact={true}
          onPress={() => {
            notifyMessage('pencil');
          }}
        />
        <Button
          labelStyle={styleCard.labelStyle}
          style={styleCard.buttons}
          icon="map-marker-outline"
          compact={true}
          color={theme.colors.primary}
          onPress={() => {
            notifyMessage('map');
          }}
        />
      </Card.Actions>
    </Card>
  ));
}

const styleCard = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: theme.radius,
    marginBottom: 10,
    borderColor: theme.colors.border,
    color: theme.colors.secondary,
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.5),
  },
  tipo: {
    fontSize: responsiveFontSize(1.3),
    textAlign: 'left',
  },
  image: {
    borderRadius: theme.radius,
    height: responsiveWidth(35),
  },
  date: {
    fontSize: responsiveFontSize(1.3),
    textAlign: 'left',
  },
  buttons: {
    marginLeft: 2,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  labelStyle: {
    fontSize: responsiveFontSize(3.5),
    fontStyle: 'italic',
  },
});
