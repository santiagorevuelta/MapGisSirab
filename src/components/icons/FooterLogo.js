import React from 'react';
import {View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ilustracion from '../../assets/icons/ilustracion.svg';

const Logo = ({
  style = {},
  width = responsiveWidth(100),
  height = responsiveHeight(35),
}) => {
  return (
    <View style={style}>
      <Ilustracion width={width} height={height} />
    </View>
  );
};

export default Logo;
