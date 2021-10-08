import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path, Circle} from 'react-native-svg';

export default ({
  style = {},
  width = responsiveWidth(5),
  height = responsiveWidth(5),
}) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 23.83 23.83"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M21.68,10.92a9.72,9.72,0,0,0-8.6-8.6V.08H10.92V2.32a9.74,9.74,0,0,0-8.61,8.6H.08v2.16H2.31a9.74,9.74,0,0,0,8.61,8.6v2.24h2.16V21.68a9.72,9.72,0,0,0,8.6-8.6h2.24V10.92Z"
          transform="translate(-0.08 -0.08)"
          fill="#258B20"
        />
        <Path
          d="M4.56,10.52a7.59,7.59,0,1,0,6-6A7.58,7.58,0,0,0,4.56,10.52Z"
          transform="translate(-0.08 -0.08)"
          fill="#fff"
        />
        <Circle
          cx="12"
          cy="12"
          r="4.33"
          transform="translate(-2.14 2.41) rotate(-10.92)"
          fill="#258B20"
        />
      </Svg>
    </View>
  );
};
