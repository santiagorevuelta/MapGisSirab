import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';
import {notifyMessage} from '../../../../core/general';
import { Paragraph, Subheading, Title } from "react-native-paper";

export default function (props) {
  return <View style={styles.container}>{row(props)}</View>;
}
function row(props) {
  return (
    <>
      <View style={styles.row}>
        {div('Especie', 'Esa mondwwwwwwwwwwwwa')}
        {div('Fecha de ingreso', 'dd/mm/yyyy')}
      </View>
      <View style={styles.row}>
        {div('Estado', 'Vivo')}
        {div('Latitud', '152121212121')}
      </View>
      <View style={styles.row}>
        {div('Tipo de árbol', 'Esa monda')}
        {div('Longitud', '46454545')}
      </View>
      <View style={styles.row}>
        {div('Tipo de ingreso', 'Prueba')}
        {div('', '')}
      </View>
    </>
  );
}

function div(label, text) {
  return (
    <View style={styles.div}>
      <Subheading style={theme.ver.Label}>{label}</Subheading>
      <Pressable
        onPress={() => {
          notifyMessage(text);
        }}>
        <Paragraph style={theme.ver.Textos}>
          {text.length > 12 ? text.slice(0, 12) + '...' : text}
        </Paragraph>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blanco,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  div: {
    width: '50%',
  },
});
