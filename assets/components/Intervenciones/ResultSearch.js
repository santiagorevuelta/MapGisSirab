import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import {theme} from '../../core/theme';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import {notifyMessage,verifiedImage} from '../../core/general';
import Pagination from '../../core/Pagination';
import styleCard from '../css/cardsCss';

export default function (props) {
  return (
    <Animated.View style={styles.container}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        {Mycard(props)}
      </ScrollView>
      <Pagination meta={props.meta} paginar={props.paginar} />
    </Animated.View>
  );
}

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
  let data = props.data;
  return data.map((item, index) => (
    <Card key={'card' + index} style={styleCard.container}>
      <Title style={[theme.textos.Label, styleCard.title]}>
        Código {item.codigo_arbol}
      </Title>
      <Card.Content>
        <Pressable
          onPress={() => {
            AsyncStorage.setItem('items', JSON.stringify(item));
            notifyMessage(JSON.stringify(item))
            //props.tabArbol(config.home[0].items.ver);
          }}>
          <Pressable
            onPress={() => {
              notifyMessage(item.tipo_intervencion);
            }}>
            <Paragraph style={[theme.textos.Textos, styleCard.tipo]}>
              {item && item.tipo_intervencion.length > 25
                ? item.tipo_intervencion.slice(0, 25) + '...'
                : item.tipo_intervencion}
            </Paragraph>
          </Pressable>
          <Card.Cover
            style={styleCard.image}
            source={ require('../../assets/imagen.png')}//ruta_foto_web
          />
        </Pressable>
      </Card.Content>
      <Card.Actions style={styleCard.contentFooter}>
        <Card.Content>
          <Paragraph style={[theme.textos.Textos, styleCard.date]}>
            {item.fecha}
          </Paragraph>
        </Card.Content>
      </Card.Actions>
    </Card>
  ));
}
