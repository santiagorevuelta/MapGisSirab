import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Animated from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';
import Pagination from '../../core/Pagination';
import ModalIntervention from './Ver/modalIntervention';
import Mycard from '../commons/RenderCardIntervencion';

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
      <ScrollView persistentScrollbar={true} horizontal style={styles.scroll}>
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
  scroll: {
    paddingBottom: 10,
  },
});
