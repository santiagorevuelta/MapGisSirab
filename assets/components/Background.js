import React from 'react';
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native';

export default function Background({children}) {
  return (
    <>
      <SafeAreaView style={styles.scroll}>
        <KeyboardAvoidingView
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          style={styles.container}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
  },
  scroll: {
    height: 'auto',
  },
});
