import React from 'react';
import {Clipboard, Pressable, StyleSheet, Text} from 'react-native';
import {theme} from '../../core/theme';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import {notifyMessage} from '../../core/general';
import {verEnMapaP} from '../map/BackgroundMap';
import Pagination from '../../core/Pagination';
import styleCard from '../css/cardsCss';
import RenderImage from '../commons/RenderImagenCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../tsconfig.json';

export default function ({data, tabArbol, meta, paginar}) {
  return (
    <Animated.View style={styles.container}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        <Mycard data={data} tabArbol={tabArbol} />
      </ScrollView>
      <Pagination meta={meta} paginar={paginar} />
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

function Mycard({data = [], tabArbol}) {
  return data.map((item, index) => (
    <Card
      key={'card' + index}
      style={styleCard.container}
      onPress={() => {
        AsyncStorage.setItem('itemsZone', JSON.stringify(item));
        tabArbol(config.home[2].items.ver);
      }}>
      <Pressable
        onPress={() => {
          Clipboard.setString(item.codigo);
          notifyMessage(item.codigo + ' copiado!');
        }}>
        <Title style={[theme.textos.Label, styleCard.title]}>
          Código {item.codigo}
        </Title>
      </Pressable>
      <Card.Content>
        <Pressable
          onPress={() => {
            notifyMessage(item.tipo_zona);
          }}>
          <Paragraph style={[theme.textos.Textos, styleCard.tipo]}>
            {item && item.tipo_zona.length > 25
              ? item.tipo_zona.slice(0, 25) + '...'
              : item.tipo_zona}
          </Paragraph>
        </Pressable>
        <RenderImage style={styleCard.image} url={item.ruta_foto_web} />
      </Card.Content>
      <Card.Actions style={styleCard.contentFooter}>
        <Card.Content>
          <Paragraph style={[theme.textos.Textos, styleCard.date]}>
            {item.fecha}
          </Paragraph>
        </Card.Content>
        <Button
          labelStyle={styleCard.labelStyle}
          style={styleCard.buttons}
          icon="map-marker-outline"
          compact={true}
          color={theme.colors.primary}
          onPress={() => {
            verEnMapaP(item.coordenadas, item);
            notifyMessage('Ver en mapa');
          }}
        />
      </Card.Actions>
    </Card>
  ));
}
