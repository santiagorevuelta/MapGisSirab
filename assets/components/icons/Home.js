import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path, Polygon} from 'react-native-svg';

export default ({
  style = {},
  width = responsiveWidth(7),
  height = responsiveWidth(7),
}) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 23.83 23.83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M3.18,11,1.55,12.62,0,11.07,10.42.64a2.22,2.22,0,0,1,3.11,0L24,11.07,22.4,12.62,20.78,11v8.8a2.21,2.21,0,0,1-2.2,2.2H5.38a2.2,2.2,0,0,1-2.2-2.2Z"
          transform="translate(0 0)"
          fill="#258B20"
        />
        <Polygon
          points="5.38 8.8 11.98 2.2 18.58 8.8 18.58 8.8 18.58 19.8 5.38 19.8 5.38 8.8 5.38 8.8"
          fill="#fff"
        />
      </Svg>
    </View>
  );
};
