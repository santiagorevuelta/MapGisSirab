import React from 'react';
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

export const SLIDER_WIDTH = responsiveWidth(100);
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}) => {
  return (
    <>
      <View style={styles.container} key={index}>
        <Image source={{uri: item.imgUrl}} style={styles.image} />
      </View>
    </>
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
    height: responsiveHeight(40),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});


export default CarouselCardItem;
