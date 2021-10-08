import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../Arbol/TextInputForm';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default props => {
  return (
    <>
      <View style={styles.form}>
        <View />
        <TextInputForm
          label={'Código'}
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="default"
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'Nombre del proyecto'}
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="default"
        />
        <TextInputForm label={'Número del proyecto'} />
      </View>
      <View style={styles.form}>
        <TextInputForm label={'Nombre cientifico'} />
        <TextInputForm label={'Año'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flex: 1,
    flexDirection: 'column',
  },
  form: {
    zIndex: 4,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
