import React from 'react';
import {View, StyleSheet, Text, TextInput as Input} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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
    width: responsiveWidth(45),
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    height: '100%',
    marginTop: 5,
    paddingLeft: 10,
    borderColor: theme.colors.border,
  },
});
