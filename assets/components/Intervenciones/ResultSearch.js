import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {theme} from '../../core/theme';
import {Card, Paragraph, Title} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import {notifyMessage} from '../../core/general';
import Pagination from '../../core/Pagination';
import styleCard from '../css/cardsCss';
import RenderImage from '../commons/RenderImagenCard';
import ModalIntervention from './Ver/modalIntervention';

export default function ({data, meta, paginar}) {
  const [dataItem, setDataItem] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  return (
    <Animated.View style={styles.container}>
      <ModalIntervention
        modalVisible={visible}
        onModalVisible={setVisible}
        data={dataItem}
      />
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        <Mycard
          data={data}
          dataItem={dataItem}
          visible={visible}
          setVisible={setVisible}
          setDataItem={setDataItem}
        />
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

function Mycard({data, visible, setVisible, setDataItem}) {
  return data.map((item, index) => (
    <Card key={'card' + index} style={styleCard.container}>
      <Title style={[theme.textos.Label, styleCard.title]}>
        Código {item.codigo_arbol}
      </Title>
      <Card.Content>
        <Pressable
          onPress={() => {
            setDataItem(item);
            setVisible(!visible);
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
          <RenderImage style={styleCard.image} url={item.ruta_foto_web} />
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
