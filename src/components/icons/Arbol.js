import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Arbol from '../../assets/icons/arbol.svg';

export default ({
  style = {},
  width = responsiveWidth(15),
  height = responsiveWidth(10),
}) => {
  return (
    <View style={style}>
      <Arbol width={width} height={height} />
    </View>
  );
};
