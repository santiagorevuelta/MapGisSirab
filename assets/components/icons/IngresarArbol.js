import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

export default ({
  style = {},
  width = responsiveWidth(30),
  height = responsiveWidth(25),
}) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66.71 63.07">
        <Path
          d="M43.66,63.07a23,23,0,1,1,23-23A23,23,0,0,1,43.66,63.07Zm0-4.19A18.86,18.86,0,1,0,24.81,40,18.85,18.85,0,0,0,43.66,58.88Zm10.48-21H45.76V29.55H41.57v8.38H33.19v4.19h8.38V50.5h4.19V42.12h8.38Z"
          fill="#41aa54"
        />
        <Path
          d="M33.46,0A12.7,12.7,0,0,0,22.64,6.06,12.57,12.57,0,0,0,18,5.17,12.75,12.75,0,0,0,5.2,17.93a12.56,12.56,0,0,0,.88,4.68A12.73,12.73,0,0,0,10.29,46a11,11,0,0,0,.28,2.23,8.93,8.93,0,0,0,3.69,5.25,15.48,15.48,0,0,0,7.22,2.92,28.81,28.81,0,0,1-2.24-5.61A12.07,12.07,0,0,1,17.1,49.5a4,4,0,0,1-1.81-2.44,8.61,8.61,0,0,1-.15-2.34c0-.29,0-.61,0-1a2.42,2.42,0,0,0-2.43-2.42A7.89,7.89,0,0,1,10.18,26a2.42,2.42,0,0,0,1.21-3.64,7.79,7.79,0,0,1-1.34-4.42,7.91,7.91,0,0,1,12.33-6.56,2.44,2.44,0,0,0,2.13.29A2.41,2.41,0,0,0,26,10.16a7.85,7.85,0,0,1,14.85,0,2.43,2.43,0,0,0,3.66,1.2A7.82,7.82,0,0,1,49,10a7.9,7.9,0,0,1,7.76,6.34,28.78,28.78,0,0,1,5,2.45c0-.29,0-.59,0-.88A12.8,12.8,0,0,0,44.26,6.05,12.67,12.67,0,0,0,33.46,0Z"
          fill="#41aa54"
        />
      </Svg>
    </View>
  );
};
