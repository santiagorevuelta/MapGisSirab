import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Consultar from '../../assets/icons/consultarArbol.svg';

export default ({
  style = {},
  width = responsiveWidth(20),
  height = responsiveWidth(15),
}) => {
  return (
    <View style={style}>
      <Consultar width={width} height={height} />
    </View>
  );
};
