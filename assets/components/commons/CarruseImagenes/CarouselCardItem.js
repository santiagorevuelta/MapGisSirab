import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';
import RenderImagenCard from '../RenderImagen';

export const SLIDER_WIDTH = responsiveWidth(100);
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export default function CarouselCardItem({item, index}) {
  return (
    <View style={styles.container} key={index}>
      <RenderImagenCard style={styles.image} url={item.ruta_foto_web} />
    </View>
  );
}

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
