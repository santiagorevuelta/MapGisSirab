import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../core/theme';

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
    height: responsiveScreenHeight(95),
    color: theme.colors.text,
  },
  scroll: {
    height: responsiveScreenHeight(90),
  },
});
