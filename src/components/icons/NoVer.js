import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

export default ({
  style = {},
  width = responsiveWidth(6),
  height = responsiveWidth(5),
  colorIcon,
}) => {
  return (
    <View style={style}>
      <Svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M4.69,6.53,2,3.85,3.42,2.42,21.15,20.17l-1.41,1.41-3.42-3.42A11.94,11.94,0,0,1,12,19a11.84,11.84,0,0,1-11-7.5A11.68,11.68,0,0,1,4.69,6.53ZM12,6a9.76,9.76,0,0,1,8.82,5.51,9.86,9.86,0,0,1-2.41,3.12L19.82,16A11.84,11.84,0,0,0,23,11.48,11.79,11.79,0,0,0,8.36,4.55L10,6.2A10.11,10.11,0,0,1,12,6ZM10.93,7.11,13,9.19a2.5,2.5,0,0,1,1.28,1.28l2.07,2.06a4.59,4.59,0,0,0,.14-1.06A4.49,4.49,0,0,0,12,7,4.75,4.75,0,0,0,10.93,7.11ZM9.51,11.35,12.12,14A.27.27,0,0,1,12,14a2.51,2.51,0,0,1-2.5-2.5.15.15,0,0,1,0-.07h0ZM7.86,9.69,6.11,8a9.82,9.82,0,0,0-2.93,3.53A9.77,9.77,0,0,0,12,17a10.44,10.44,0,0,0,2.75-.39l-1-1A4.35,4.35,0,0,1,12,16a4.51,4.51,0,0,1-4.5-4.5A4.65,4.65,0,0,1,7.86,9.69Z"
          transform="translate(-1 -2.42)"
          fill={colorIcon ? colorIcon : '#959595'}
        />
      </Svg>
    </View>
  );
};
