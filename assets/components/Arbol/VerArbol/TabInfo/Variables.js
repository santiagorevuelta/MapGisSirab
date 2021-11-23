import React, {useState} from 'react';
import {DataTable} from 'react-native-paper';
import {theme} from '../../../../core/theme';
import {ScrollView, StyleSheet, View} from 'react-native';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../../../../core/general';

const optionsPerPage = [2, 3, 4];

export default function ({data}) {
  const [items, setItems] = useState(data);

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(items);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
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
});
