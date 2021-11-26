import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Limpiar from '../../assets/icons/Limpiar.svg';

export default ({
  style = {},
  width = responsiveWidth(8),
  height = responsiveWidth(8),
  colorIcon,
}) => {
  return (
    <View style={style}>
      <Limpiar width={width} height={height} />
    </View>
  );
};
