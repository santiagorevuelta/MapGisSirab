import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';
import {
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import ModalIntervention from '../../../Intervenciones/Ver/modalIntervention';
import Rows from '../../../commons/RenderCardIntervencion';

export default function ({data = []}) {
  const [dataItem, setDataItem] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <ModalIntervention
        modalVisible={visible}
        onModalVisible={setVisible}
        data={dataItem}
      />
      {data.length === 0 ? null : (
        <Text style={[theme.textos.Label, styles.h1]}>
          {'Intervenciones del árbol'}
        </Text>
      )}
      <ScrollView horizontal style={styles.scroll}>
        <Rows
          data={data}
          dataItem={dataItem}
          visible={visible}
          setVisible={setVisible}
          setDataItem={setDataItem}
        />
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
  content: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
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
