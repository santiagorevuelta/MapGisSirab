import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Svg, {Path} from 'react-native-svg';

export default ({
  style = {},
  width = responsiveWidth(5),
  height = responsiveWidth(5),
  colorIcon,
}) => {
  return (
    <View style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 16.78 16"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M.08,14.45a1.5,1.5,0,0,0-.07.7,1.68,1.68,0,0,0,.26.65,1.72,1.72,0,0,0,.7.55,1.72,1.72,0,0,0,.87.14H15a1.74,1.74,0,0,0,1.54-.7,1.56,1.56,0,0,0,.25-.66,1.68,1.68,0,0,0-.07-.7,8.89,8.89,0,0,0-2-3.12,8.75,8.75,0,0,0-3.06-2.06,5,5,0,0,0,1.57-2.53,5,5,0,0,0-.16-3,5,5,0,0,0-9.34,0,5,5,0,0,0-.16,3A5,5,0,0,0,5.15,9.25a8.82,8.82,0,0,0-3.09,2.06A9,9,0,0,0,.08,14.45Zm6.84-4.32a.7.7,0,0,0,.5-.16.67.67,0,0,0,.24-.46A.66.66,0,0,0,7.5,9,.68.68,0,0,0,7,8.77,3.6,3.6,0,0,1,5.21,7.14a3.61,3.61,0,0,1,.88-4.53,3.62,3.62,0,0,1,5.49,4.53A3.6,3.6,0,0,1,9.75,8.77.71.71,0,0,0,9.29,9a.66.66,0,0,0-.16.49.68.68,0,0,0,.25.46.66.66,0,0,0,.49.16,7.57,7.57,0,0,1,5.57,4.71.22.22,0,0,1,0,.16c0,.08-.22.13-.44.13H1.84c-.3,0-.43-.09-.48-.22a7.5,7.5,0,0,1,5.56-4.78Z"
          transform="translate(0 -0.5)"
          fill={colorIcon ? colorIcon : '#959595'}
        />
      </Svg>
    </View>
  );
};
