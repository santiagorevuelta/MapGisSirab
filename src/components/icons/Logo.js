import React from 'react';
import {View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Logo from '../../assets/icons/logoMapgisSirab.svg';

export default ({
  style = {},
  width = responsiveWidth(50),
  height = responsiveHeight(20),
}) => {
  return (
    <View style={style}>
      <Logo width={width} height={height} />
    </View>
  );
};
