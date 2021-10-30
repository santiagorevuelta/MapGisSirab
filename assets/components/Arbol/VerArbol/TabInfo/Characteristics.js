import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React, {useState} from 'react';
import {notifyMessage} from '../../../../core/general';
import {Paragraph, Subheading} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (props) {
  const [items, setItems] = useState({});
  const [swNew, setSwNew] = useState(true);
  if (swNew){
    AsyncStorage.getItem('verArbol').then(jsonValue => {
      const item = jsonValue != null ? JSON.parse(jsonValue) : {};
      setItems(item);
    });
    setSwNew(!swNew)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          {div('Especie', items.especie ? items.especie : null)}
          {div('Fecha de ingreso', items.fecha ? items.fecha : null)}
        </View>
        <View style={styles.row}>
          {div('Estado', items.estado ? items.estado : null)}
          {div('Latitud', items.latitud ? items.latitud : null)}
        </View>
        <View style={styles.row}>
          {div('Tipo de árbol', items.tipo_arbol ? items.tipo_arbol : null)}
          {div('Longitud', items.longitud ? items.longitud : null)}
        </View>
        <View style={styles.row}>
          {div(
            'Tipo de ingreso',
            items.tipo_origen_arbol ? items.tipo_origen_arbol : null,
          )}
        </View>
      </ScrollView>
    </View>
  );
}

function div(label, text) {
  return (
    <View style={styles.div}>
      <Text style={[theme.ver.Label, styles.title]}>{label}</Text>
      <Pressable
        onPress={() => {
          notifyMessage(text);
        }}>
        <Paragraph style={[theme.ver.Textos, styles.result]}>
          {text && text.length > 22 ? text.slice(0, 22) + '...' : text}
        </Paragraph>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:theme.colors.blanco,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  div: {
    width: '50%',
  },
  edit: {
    textAlign: 'right',
  },
  result: {},
});
