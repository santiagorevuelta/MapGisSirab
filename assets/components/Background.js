import React from 'react';
import {StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

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
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(10),
  },
  scroll: {
    height: 'auto',
  },
});
