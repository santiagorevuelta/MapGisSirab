import React from 'react';
import {StyleSheet, TextInput as Input, View} from 'react-native';
import {theme} from '../../core/theme';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default function TextInput({...props}) {
  return (
    <View style={styles.container}>
      <Input
        style={[
          styles.input,
          props.isFocus ? {color: theme.colors.primary} : {},
        ]}
        placeholder={props.label}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(70),
    height: responsiveWidth(10),
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#C4C4C4',
    height: '100%',
    color: theme.colors.text,
  },
});
