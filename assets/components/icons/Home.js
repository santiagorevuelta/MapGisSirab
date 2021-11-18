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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.37754 8.79999L11.979 2.19854L18.5805 8.79999H18.5791V19.8H5.37915V8.79999H5.37754ZM3.17915 10.9984L1.55452 12.623L0 11.0685L10.4247 0.643819C11.2831 -0.214606 12.6749 -0.214606 13.5333 0.643819L23.958 11.0685L22.4035 12.623L20.7791 10.9987V19.8C20.7791 21.015 19.7942 22 18.5791 22H5.37915C4.16412 22 3.17915 21.015 3.17915 19.8V10.9984Z"
          fill="#41AA54"
        />
      </Svg>
    </View>
  );
};
