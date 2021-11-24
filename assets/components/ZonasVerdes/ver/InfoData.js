import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../core/theme';
import React from 'react';
import {notifyMessage} from '../../../core/general';
import {Paragraph} from 'react-native-paper';

export default function ({data}) {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {div('Codigo', data.codigo)}
        {div('Fecha ingreso', data?.fecha)}
      </View>
      <View style={styles.row}>
        {div('Codigo proyecto', data?.codigo_proyecto)}
        {div('Nombre proyecto', data?.nombre_proyecto)}
      </View>
      <View style={styles.row}>
        {div('Nombre', data?.nombre)}
        {div('Tipo zona', data?.tipo_zona)}
      </View>
      <View style={styles.row}>
        {div('Comuna', data?.nombre_primer_nivel)}
        {div('Barrio', data?.nombre_segundo_nivel)}
      </View>
      <View style={styles.row}>{div('Descripción', data?.descripcion)}</View>
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
