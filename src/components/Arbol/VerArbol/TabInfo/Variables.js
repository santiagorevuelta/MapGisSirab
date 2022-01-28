import React, {useState} from 'react';
import {Button, DataTable} from 'react-native-paper';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import ModalVariables from '../../../Variables/ModalVariables';
import {theme} from '../../../../core/theme';
import Renderload from '../../../Load';

const optionsPerPage = [2, 3, 4];

export default function ({data, idArbol}) {
  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(false);
  const [loadApp, setLoadApp] = useState(false);

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(items);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <Renderload setLoadVisible={setLoadApp} load={loadApp} />
      <ModalVariables
        modalVisible={visible}
        onModalVisible={setVisible}
        items={items}
        setItems={setItems}
        idArbol={idArbol}
        loadApp={loadApp}
        setLoadApp={setLoadApp}
      />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            style={styles.text}
            children={<Text style={styles.texth}>Fecha</Text>}
          />
          <DataTable.Title
            style={styles.text}
            children={<Text style={styles.texth}>Altura copa</Text>}
          />
          <DataTable.Title
            style={styles.text}
            children={<Text style={styles.texth}>Altura árbol</Text>}
          />
          <DataTable.Title
            style={styles.text}
            children={<Text style={styles.texth}>DAP 1</Text>}
          />
          <DataTable.Title
            style={styles.text}
            children={<Text style={styles.texth}>DAP 2</Text>}
          />
        </DataTable.Header>
        <ScrollView>
          {items &&
            items.length > 0 &&
            items.map((index, i) => (
              <DataTable.Row key={i} style={styles.body}>
                <DataTable.Cell
                  style={styles.text}
                  children={
                    <Text style={styles.text}>{index.fecha_ingreso}</Text>
                  }
                />
                <DataTable.Cell
                  style={styles.text}
                  numeric
                  children={
                    <Text style={styles.text}>{index.altura_copa}</Text>
                  }
                />
                <DataTable.Cell
                  style={styles.text}
                  children={<Text style={styles.text}>{index.altura}</Text>}
                />
                <DataTable.Cell
                  style={styles.text}
                  children={<Text style={styles.text}>{index.dap1}</Text>}
                />
                <DataTable.Cell
                  style={styles.text}
                  children={<Text style={styles.text}>{index.dap2}</Text>}
                />
              </DataTable.Row>
            ))}
        </ScrollView>
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
    padding: 0,
    margin: 0,
    backgroundColor: theme.colors.blanco,
    height: '100%',
  },
  body: {
    flex: 1,
  },
  texth: {
    fontSize: responsiveScreenFontSize(1.3),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.colors.primary,
  },
  text: {
    fontSize: responsiveScreenFontSize(1.2),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
