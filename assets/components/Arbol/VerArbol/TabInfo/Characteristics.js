import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';
import {notifyMessage} from '../../../../core/general';

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
      <Text style={theme.ver.Label}>{label}</Text>
      <Pressable
        onPress={() => {
          notifyMessage(text);
        }}>
        <Text style={theme.ver.Textos}>
          {text.length > 12 ? text.slice(0, 12) + '...' : text}
        </Text>
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
    paddingTop: 2,
  },
  div: {
    width: '40%',
  },
});
