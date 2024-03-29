import React from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function TextArea({...props}) {
  return (
    <View style={styles.container}>
      <Text style={theme.textos.LabelIn}>{props.label}</Text>
      <Input
        style={[
          styles.input,
          props.isFocus ? {color: theme.colors.primary} : {},
        ]}
        multiline
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    height: responsiveHeight(10),
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
    marginTop: 1,
    paddingLeft: 10,
    margin: 0,
    padding: 0,
    borderColor: theme.colors.border,
  },
});
