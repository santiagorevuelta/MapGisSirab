import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Consultar from '../../assets/icons/consultarArbol.svg';

export default ({
  style = {},
  width = responsiveWidth(15),
  height = responsiveWidth(10),
}) => {
  return (
    <View style={style}>
      <Consultar width={width} height={height} />
    </View>
  );
};
