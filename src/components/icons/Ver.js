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
      <Svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 12">
        <Path
          d="M8.88,3c2,0,3.8,1,5.6,2.7.6.6,1.1,1.2,1.6,1.8.3.4.5.7.6.8l.2.4-.21.4a3,3,0,0,1-.6.8c-.5.6-1,1.2-1.6,1.8a8,8,0,0,1-5.6,2.7c-2,0-3.8-1-5.6-2.7-.6-.6-1.1-1.2-1.6-1.8a8,8,0,0,1-.6-.8l-.19-.4.19-.4a3.67,3.67,0,0,1,.61-.8c.5-.6,1-1.2,1.6-1.8A8.41,8.41,0,0,1,8.88,3ZM15,8.43a7.52,7.52,0,0,0-1.5-1.6,7.22,7.22,0,0,0-4.6-2.3,7,7,0,0,0-4.6,2.2,11.51,11.51,0,0,0-1.4,1.7l-.31.3.31.3a11.51,11.51,0,0,0,1.4,1.7A7.2,7.2,0,0,0,8.88,13a6.76,6.76,0,0,0,4.6-2.3c.5-.5,1-1.1,1.5-1.6l.29-.3C15.08,8.63,15.08,8.53,15,8.43Zm-9,.3a2.82,2.82,0,0,0,2.9,2.8,2.88,2.88,0,0,0,2.89-2.8,2.82,2.82,0,0,0-2.89-2.8A2.82,2.82,0,0,0,6,8.73Zm4.4,0A1.37,1.37,0,0,1,9,10.13a1.45,1.45,0,0,1-1.5-1.4,1.37,1.37,0,0,1,1.4-1.4A1.46,1.46,0,0,1,10.38,8.73Z"
          transform="translate(-0.88 -3.03)"
          fill={colorIcon ? colorIcon : '#959595'}
        />
      </Svg>
    </View>
  );
};
