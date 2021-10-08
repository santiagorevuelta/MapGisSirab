import React from 'react';
import {StyleSheet, Platform, KeyboardAvoidingView, View} from 'react-native';
export default function Background({children}) {
  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={-999999999999}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    flexDirection: 'column',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
