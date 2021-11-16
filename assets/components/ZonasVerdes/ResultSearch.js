import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
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

export default function (props) {
  return (
    <Animated.View style={styles.container}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        <Mycard data={props.data} />
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

function Mycard({data = []}) {
  return data.map((item, index) => (
    <Card key={'card' + index} style={styleCard.container}>
      <Title style={[theme.textos.Label, styleCard.title]}>
        Código {item.codigo}
      </Title>
      <Card.Content>
        <Pressable
          onPress={() => {
            //AsyncStorage.setItem('items', JSON.stringify(item));
            //props.tabArbol(config.home[0].items.ver);
          }}>
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
        </Pressable>
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
            verEnMapaP(item.coordenadas);
            notifyMessage('Ver en mapa');
          }}
        />
      </Card.Actions>
    </Card>
  ));
}
