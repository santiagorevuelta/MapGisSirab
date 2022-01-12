import React, {useState} from 'react';
import {DataTable} from 'react-native-paper';
import {theme} from '../../../../core/theme';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  header: {},
});
