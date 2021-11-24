import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';
import InfoData from './InfoData';

export default function InfoZone({verZona}) {
  return (
    <View style={styles.floatModal}>
      <InfoData data={verZona} />
    </View>
  );
}

const styles = StyleSheet.create({
  floatModal: {
    backgroundColor: theme.colors.blanco,
    position: 'absolute',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    elevation: 6,
    padding: '5%',
    zIndex: 3,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
    marginLeft: responsiveScreenWidth(5),
    marginRight: responsiveScreenWidth(5),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    top: responsiveHeight(Platform.OS === 'ios' ? 35 : 30),
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
