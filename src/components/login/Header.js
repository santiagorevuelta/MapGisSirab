import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../../core/theme';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    top: '-2%',
    fontSize: responsiveScreenFontSize(1.4),
    color: theme.colors.secondary,
    textAlign: 'center',
  },
});
