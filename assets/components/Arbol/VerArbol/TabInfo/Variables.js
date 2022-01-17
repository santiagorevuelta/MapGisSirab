import React, {useState} from 'react';
import {Button, DataTable} from 'react-native-paper';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../../../../core/general';
import ModalVariables from '../../../Variables/ModalVariables';
import {theme} from '../../../../core/theme';

const optionsPerPage = [2, 3, 4];

export default function ({data}) {
  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(false);

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(items);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <ModalVariables modalVisible={visible} onModalVisible={setVisible} />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title label={'fecha'}>Fecha</DataTable.Title>
          <DataTable.Title
            onPress={() => notifyMessage('Altura árbol')}
            numeric>
            Altura árbol
          </DataTable.Title>
          <DataTable.Title
            onPress={() => notifyMessage('Altura copa(m)')}
            numeric>
            Altura copa(m)
          </DataTable.Title>
          <DataTable.Title numeric>DAP 1</DataTable.Title>
          <DataTable.Title numeric>DAP 2</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {items &&
            items.length > 0 &&
            items.map((index, i) => (
              <DataTable.Row key={i} style={styles.body}>
                <DataTable.Cell
                  style={styles.text}
                  onPress={() => notifyMessage(index.fecha_ingreso)}>
                  {index.fecha_ingreso}
                </DataTable.Cell>
                <DataTable.Cell style={styles.text} numeric>
                  {index.altura}
                </DataTable.Cell>
                <DataTable.Cell style={styles.text} numeric>
                  {index.altura_copa}
                </DataTable.Cell>
                <DataTable.Cell style={styles.text} numeric>
                  {index.dap1}
                </DataTable.Cell>
                <DataTable.Cell style={styles.text} numeric>
                  {index.dap2}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
        </ScrollView>
        {/*<DataTable.Pagination*/}
        {/*  page={page}*/}
        {/*  numberOfPages={items.length/3}*/}
        {/*  onPageChange={(page) => setPage(page)}*/}
        {/*  //label="1-2 of 6"*/}
        {/*  optionsPerPage={optionsPerPage}*/}
        {/*  itemsPerPage={itemsPerPage}*/}
        {/*  setItemsPerPage={setItemsPerPage}*/}
        {/*  showFastPagination*/}
        {/*  optionsLabel={'Rows per page'}*/}
        {/*/>*/}
      </DataTable>
      <View style={styles.containBtn}>
        <Button
          style={styles.btn}
          icon={'plus-box'}
          color={theme.colors.primary}
          labelStyle={{fontSize: responsiveFontSize(4)}}
          compact={true}
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: theme.colors.blanco,
    height: '100%',
  },
  body: {
    flex: 1,
  },
  text: {
    fontSize: responsiveScreenFontSize(0.5),
    flex: 1,
  },
  containBtn: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  btn: {
    height: 40,
    width: 40,
  },
});
