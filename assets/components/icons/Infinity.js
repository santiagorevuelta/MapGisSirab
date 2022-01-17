import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Infinity from '../../assets/Infinity.svg';

export default ({
  style = {},
  width = responsiveWidth(10),
  height = responsiveWidth(10),
}) => {
  return (
    <View style={style}>
      <Infinity width={width} height={height} />
    </View>
  );
};
