import React from 'react';
import {View, StyleSheet, Text, TextInput as Input} from 'react-native';
import {theme} from '../../core/theme';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default function TextInput({...props}) {
  return (
    <View style={styles.container}>
      <Text style={theme.textos.LabelIn}>{props.label}</Text>
      <Input
        style={[
          styles.input,
          props.isFocus ? {color: theme.colors.primary} : {},
        ]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(44),
    height: responsiveWidth(12),
    margin: responsiveWidth(3),
  },
  input: {
    fontFamily: 'Roboto',
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    marginTop: 5,
    borderColor: '#C4C4C4',
  },
});
