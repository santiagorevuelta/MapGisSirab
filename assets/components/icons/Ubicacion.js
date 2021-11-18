import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

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
          d="M21.6,10.84A9.72,9.72,0,0,0,13,2.24V0H10.84V2.24a9.74,9.74,0,0,0-8.61,8.6H0V13H2.23a9.74,9.74,0,0,0,8.61,8.6v2.24H13V21.6A9.72,9.72,0,0,0,21.6,13h2.24V10.84Zm-2.22,2.5a7.59,7.59,0,1,1-8.9-8.9,7.45,7.45,0,0,1,2.9,0A7.6,7.6,0,0,1,19.38,13.34Z"
          transform="translate(0 0)"
          fill="#2b9543"
        />
        <Path
          d="M11.1,7.67a4.33,4.33,0,1,0,5.07,3.43A4.33,4.33,0,0,0,11.1,7.67Z"
          transform="translate(0 0)"
          fill="#2b9543"
        />
      </Svg>
    </View>
  );
};
