import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function Background({children}) {
  return (
    <SafeAreaView style={styles.scroll}>
      <KeyboardAvoidingView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(10),
    height: responsiveScreenHeight(100),
  },
  scroll: {
    height: responsiveScreenHeight(90),
  },
});
