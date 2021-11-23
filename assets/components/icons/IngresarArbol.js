import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import IngresarArbol from '../../assets/icons/IngresarArbol.svg';

export default ({
  style = {},
  width = responsiveWidth(20),
  height = responsiveWidth(15),
}) => {
  return (
    <View style={style}>
      <IngresarArbol width={width} height={height} />
    </View>
  );
};
