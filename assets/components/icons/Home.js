import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Home from '../../assets/icons/home.svg';

export default ({
  style = {},
  width = responsiveWidth(7),
  height = responsiveWidth(7),
}) => {
  return (
    <View style={style}>
      <Home width={width} height={height} />
    </View>
  );
};
