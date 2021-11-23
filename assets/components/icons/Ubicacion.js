import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Ubicacion from '../../assets/icons/ubicacion.svg';

export default ({
  style = {},
  width = responsiveWidth(7),
  height = responsiveWidth(7),
}) => {
  return (
    <View style={style}>
      <Ubicacion width={width} height={height} />
    </View>
  );
};
