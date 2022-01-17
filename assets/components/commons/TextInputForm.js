import React from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveHeight,
  responsiveScreenFontSize,
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
          !props.editable && props.editable !== undefined
            ? {backgroundColor: 'rgba(149,149,149,0.66)'}
            : {},
        ]}
        {...props}
        onEndEditing={e => {
          //let valid = await validType(text, props.keyboardType);
          //if (valid) {
          props.onChangeTextInput(e.nativeEvent.text.trimStart());
          // }
        }}
      />
    </View>
  );
}

async function validType(event, type = 'default') {
  let objtrue = true;
  let numreg = /^[0-9.]+$/;
  let textreg =
    /^[A-Za-z0-9\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC\u00D1\u00F1\u00A0\-,. ]+$/;
  if (type === 'numeric' && !numreg.test(event) && event !== '') {
    objtrue = false;
  } else if (type === 'default' && !textreg.test(event) && event !== '') {
    objtrue = false;
  }
  return objtrue;
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(45),
    height: responsiveHeight(theme.altoCampos),
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
    fontSize: responsiveScreenFontSize(theme.font),
  },
});
