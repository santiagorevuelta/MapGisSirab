import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';
import {notifyMessage} from '../../../../core/general';
import { Button, Paragraph, Subheading, Title } from "react-native-paper";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export default function (props) {
  return <View style={styles.container}>{row(props)}</View>;
}
function row(props) {
  return (
    <ScrollView>
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
        <Button
          labelStyle={{fontSize: responsiveScreenFontSize(3)}}
          style={styles.edit}
          icon="pencil-outline"
          color={theme.colors.primary}
          compact={true}
          onPress={() => {
            notifyMessage('pencil');
          }}
        />
      </View>
    </ScrollView>
  );
}

function div(label, text) {
  return (
    <View style={styles.div}>
      <Subheading style={[theme.ver.Label, styles.title]}>{label}</Subheading>
      <Pressable
        onPress={() => {
          notifyMessage(text);
        }}>
        <Paragraph style={[theme.ver.Textos, styles.result]}>
          {text.length > 12 ? text.slice(0, 12) + '...' : text}
        </Paragraph>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    justifyContent: 'center',
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
