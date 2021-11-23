import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Intervencion from '../../assets/icons/Intervencion.svg';

export default ({
  style = {},
  width = responsiveWidth(15),
  height = responsiveWidth(10),
}) => {
  return (
    <View style={style}>
      <Intervencion width={width} height={height} />
    </View>
  );
};
