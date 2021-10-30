import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';
import {verifiedImage} from  '../../../../core/general'

export const SLIDER_WIDTH = responsiveWidth(100);
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export default function CarouselCardItem ({ item, index}){
  return (
    <View style={styles.container} key={index}>
      <Image source={require('../../../../assets/imagen.png')} //source={{ uri: item.ruta_foto_web }}
             onError={({ nativeEvent: {error} }) => {
               console.log(error.target)
               //error = require('../../../../assets/imagen.png');
             }}
             style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    borderRadius: 8,
    width: ITEM_WIDTH,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: ITEM_WIDTH,
    height: responsiveHeight(35),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});

