import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../core/theme';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

export default function Button({mode, style, ...props}) {
  return (
    <PaperButton
      uppercase={false}
      style={[styles.button, mode === 'outlined', style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    fontSize: responsiveScreenFontSize(theme.fontbtn),
  },
});
