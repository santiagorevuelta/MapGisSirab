import React from 'react';
import {View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Svg, {Path as Path, Rect as Rect} from 'react-native-svg';

const Logo = ({
  style = {},
  width = responsiveWidth(80),
  height = responsiveHeight(25),
}) => {
  //viewBox = <min-x> <min-y> <width> <height>
  let viewBox = `0 0 ${parseInt(responsiveHeight(35))} ${parseInt(
    responsiveWidth(45),
  )}`;
  return (
    <View style={[style, {width: width, height: height}]}>
      <Svg
        style={{bottom: 0, padding: 5}}
        viewBox={viewBox}
        width={'100%'}
        height={'100%'}
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M245.8,168.2a117.05,117.05,0,1,0-210.7,0Zm-105.2,66h0Z"
          fill="#ffe3b8"
        />
        <Path d="M81.4,127.7H52.3v39.8H81.4Z" fill="#cfb997" />
        <Path d="M57.8,129.7H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,129.7H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,129.7H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,129.7H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,131.5H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,131.5H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,131.5H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,131.5H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,133.2H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,133.2H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,133.2H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,133.2H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,135H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,135H59.3v1.2H70V135Z" fill="#c2a87e" />
        <Path d="M74.3,135H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,135H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,136.8H55.2V138h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,136.8H59.3V138H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,136.8H71.7V138h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,136.8H75.9V138h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,138.5H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,138.5H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,138.5H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,138.5H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,140.3H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,140.3H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,140.3H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,140.3H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,142.1H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,142.1H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,142.1H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,142.1H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,143.9H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,143.9H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,143.9H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,143.9H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,145.6H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,145.6H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,145.6H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,145.6H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,147.4H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,147.4H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,147.4H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,147.4H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,149.1H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,149.1H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,149.1H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,149.1H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,150.9H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,150.9H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,150.9H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,150.9H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,152.7H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,152.7H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,152.7H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,152.7H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,154.4H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,154.4H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,154.4H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,154.4H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,156.2H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,156.2H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,156.2H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,156.2H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,158H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,158H59.3v1.2H70V158Z" fill="#c2a87e" />
        <Path d="M74.3,158H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,158H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,159.7H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,159.7H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,159.7H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,159.7H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,161.5H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,161.5H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,161.5H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,161.5H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,163.3H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,163.3H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,163.3H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,163.3H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M57.8,165.1H55.2v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M69.9,165.1H59.3v1.2H70v-1.2Z" fill="#c2a87e" />
        <Path d="M74.3,165.1H71.7v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M78.5,165.1H75.9v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M82.5,127.2H50.6v1.2H82.4v-1.2Z" fill="#c2a87e" />
        <Path d="M105,106.6H92.3v3.9H105Z" fill="#cdb99a" />
        <Path d="M108,110H89.2v59.6H108Z" fill="#dacbb5" />
        <Path d="M92.7,113.1H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,113.1H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,113.1H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,113.1H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,113.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,113.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,115.7H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,115.7H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,115.7H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,115.7H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,115.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,115.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,118.4H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,118.4H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,118.4H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,118.4H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,118.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,118.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,121H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,121H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,121H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,121H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,121h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,121h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,123.7H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,123.7H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,123.7H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,123.7H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,123.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,123.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,126.3H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,126.3H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,126.3H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,126.3H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,126.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,126.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,128.9H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,128.9H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,128.9H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,128.9H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,128.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,128.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,131.6H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,131.6H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,131.6H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,131.6H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,131.6h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,131.6h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,134.2H91V136h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,134.2H93.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,134.2H96.4V136h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,134.2H99.1V136h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,134.2h-1.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,134.2h-1.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,136.9H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,136.9H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,136.9H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,136.9H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,136.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,136.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,139.5H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,139.5H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,139.5H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,139.5H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,139.5h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,139.5h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,142.1H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,142.1H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,142.1H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,142.1H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,142.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,142.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,144.8H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,144.8H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,144.8H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,144.8H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,144.8h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,144.8h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,147.4H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,147.4H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,147.4H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,147.4H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,147.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,147.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,150.1H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,150.1H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,150.1H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,150.1H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,150.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,150.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,152.7H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,152.7H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,152.7H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,152.7H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,152.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,152.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,155.4H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,155.4H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,155.4H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,155.4H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,155.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,155.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,158H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,158H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,158H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,158H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,158h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,158h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,160.7H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,160.7H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,160.7H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,160.7H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,160.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,160.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,163.3H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,163.3H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M98.1,163.3H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,163.3H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,163.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,163.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M92.7,165.9H91v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M95.4,165.9H93.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M101.2,101.8h-5v3.9h5Z" fill="#cdb99a" />
        <Path d="M101.9,100.1H95.7v1.7h6.2Z" fill="#dacbb5" />
        <Path d="M98.1,165.9H96.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M100.8,165.9H99.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M103.4,165.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.1,165.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M106.7,104.9H90.9v1.7h15.8Z" fill="#dacbb5" />
        <Path d="M123.8,106.6H111.2v3.9h12.6Z" fill="#b19a75" />
        <Path d="M126.8,110H108v59.6h18.8Z" fill="#c1b097" />
        <Path d="M111.6,113.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,113.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,113.1h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,113.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,113.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,113.1h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,115.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,115.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,115.7h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,115.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,115.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,115.7h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,118.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,118.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,118.4h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,118.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,118.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,118.4h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,121h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,121h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,121h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,121h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,121h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,121h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,123.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,123.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,123.7h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,123.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,123.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,123.7h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,126.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,126.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,126.3h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,126.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,126.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,126.3h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,128.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,128.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,128.9h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,128.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,128.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,128.9h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,131.6h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,131.6h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,131.6h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,131.6h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,131.6h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,131.6h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,134.2h-1.7V136h1.7Z" fill="#b19a75" />
        <Path d="M114.3,134.2h-1.7V136h1.7Z" fill="#b19a75" />
        <Path d="M117,134.2h-1.7V136H117Z" fill="#b19a75" />
        <Path d="M119.6,134.2h-1.7V136h1.7Z" fill="#b19a75" />
        <Path d="M122.3,134.2h-1.7V136h1.7Z" fill="#b19a75" />
        <Path d="M125,134.2h-1.7V136H125Z" fill="#b19a75" />
        <Path d="M111.6,136.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,136.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,136.9h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,136.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,136.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,136.9h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,139.5h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,139.5h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,139.5h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,139.5h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,139.5h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,139.5h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,142.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,142.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,142.1h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,142.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,142.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,142.1h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,144.8h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,144.8h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,144.8h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,144.8h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,144.8h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,144.8h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,147.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,147.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,147.4h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,147.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,147.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,147.4h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,150.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,150.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,150.1h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,150.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,150.1h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,150.1h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,152.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,152.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,152.7h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,152.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,152.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,152.7h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,155.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,155.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,155.4h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,155.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,155.4h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,155.4h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,158h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,158h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,158h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,158h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,158h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,158h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,160.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,160.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,160.7h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,160.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,160.7h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,160.7h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,163.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,163.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M117,163.3h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,163.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,163.3h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,163.3h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M111.6,165.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M114.3,165.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M120.1,101.8h-5v3.9h5Z" fill="#b19a75" />
        <Path d="M120.8,100.1h-6.2v1.7h6.2Z" fill="#c1b097" />
        <Path d="M117,165.9h-1.7v1.8H117Z" fill="#b19a75" />
        <Path d="M119.6,165.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M122.3,165.9h-1.7v1.8h1.7Z" fill="#b19a75" />
        <Path d="M125,165.9h-1.7v1.8H125Z" fill="#b19a75" />
        <Path d="M125.5,104.9H109.7v1.7h15.8Z" fill="#c1b097" />
        <Path d="M171.1,95.3H144.8v71.6h26.3Z" fill="#cfb997" />
        <Path d="M149.8,98.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,98.9h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,98.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,98.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,102.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,102.1h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,102.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,102.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,105.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,105.3h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,105.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,105.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,108.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,108.5h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,108.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,108.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,111.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,111.7h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,111.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,111.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,114.8h-2.4V117h2.4Z" fill="#b19a75" />
        <Path d="M160.8,114.8h-9.6V117h9.6Z" fill="#b19a75" />
        <Path d="M164.8,114.8h-2.4V117h2.4Z" fill="#b19a75" />
        <Path d="M168.6,114.8h-2.4V117h2.4Z" fill="#b19a75" />
        <Path d="M149.8,118h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,118h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,118h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,118h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,121.2h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,121.2h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,121.2h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,121.2h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,124.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,124.4h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,124.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,124.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,127.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,127.5h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,127.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,127.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,130.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,130.7h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,130.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,130.7h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,133.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,133.9h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,133.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,133.9h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,137.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,137.1h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,137.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,137.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,140.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,140.3h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,140.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,140.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,143.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,143.4h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,143.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,143.4h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,146.6h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,146.6h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,146.6h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,146.6h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,149.8h-2.4V152h2.4Z" fill="#b19a75" />
        <Path d="M160.8,149.8h-9.6V152h9.6Z" fill="#b19a75" />
        <Path d="M164.8,149.8h-2.4V152h2.4Z" fill="#b19a75" />
        <Path d="M168.6,149.8h-2.4V152h2.4Z" fill="#b19a75" />
        <Path d="M149.8,153h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,153h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,153h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,153h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,156.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,156.1h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,156.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,156.1h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,159.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,159.3h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,159.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,159.3h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M149.8,162.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M160.8,162.5h-9.6v2.2h9.6Z" fill="#b19a75" />
        <Path d="M164.8,162.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M168.6,162.5h-2.4v2.2h2.4Z" fill="#b19a75" />
        <Path d="M172.1,94.3H143.3v2.1h28.8Z" fill="#b19a75" />
        <Path d="M145.6,116.2h-17v3.1h17Z" fill="#cdb99a" />
        <Path d="M149.7,118.9H124.5v47.4h25.2Z" fill="#dacbb5" />
        <Path d="M129.2,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,121.3h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,123.4h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M140,125.5h-2.3V127H140Z" fill="#cdb99a" />
        <Path d="M143.6,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,127.6h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,129.7h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,131.8h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,133.9h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,136h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,138.1h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,140.2h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,142.3h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,144.4h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M140,146.5h-2.3V148H140Z" fill="#cdb99a" />
        <Path d="M143.6,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,148.6h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,150.7h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,152.9h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,154.9h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,157.1h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,159.2h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,161.3h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M129.2,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M132.8,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M136.4,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M140,163.4h-2.3v1.5H140Z" fill="#cdb99a" />
        <Path d="M143.6,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M147.2,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M148,114.8H126.8v1.4H148Z" fill="#dacbb5" />
        <Path d="M236.7,116.2h-17v3.1h17Z" fill="#cdb99a" />
        <Path d="M240.8,118.9H215.6v47.4h25.2Z" fill="#dacbb5" />
        <Path d="M220.3,121.3H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,121.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,121.3H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,123.4H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,123.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,123.4H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,125.5H218V127h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,125.5h-2.3V127h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,125.5H236V127h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,127.6H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,127.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,127.6H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,129.7H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,129.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,129.7H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,131.8H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,131.8h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,131.8H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,133.9H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,133.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,133.9H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,136H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,136h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,136H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,138.1H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,138.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,138.1H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,140.2H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,140.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,140.2H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,142.3H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,142.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,142.3H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,144.4H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,144.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,144.4H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,146.5H218V148h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,146.5h-2.3V148h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,146.5H236V148h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,148.6H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,148.6h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,148.6H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,150.7H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,150.7h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,150.7H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,152.9H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,152.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,152.9H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,154.9H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,154.9h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,154.9H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,157.1H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,157.1h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,157.1H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,159.2H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,159.2h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,159.2H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,161.3H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,161.3h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,161.3H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M220.3,163.4H218v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M223.9,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M227.5,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M231.1,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M234.7,163.4h-2.3v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M238.3,163.4H236v1.5h2.3Z" fill="#cdb99a" />
        <Path d="M239,114.8H217.8v1.4H239Z" fill="#dacbb5" />
        <Path d="M184.5,106.6H171.9v3.9h12.6Z" fill="#cdb99a" />
        <Path d="M187.6,110H168.8v59.6h18.8Z" fill="#dacbb5" />
        <Path d="M172.3,113.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,113.1h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,113.1H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,113.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,113.1h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,113.1H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,115.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,115.7h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,115.7H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,115.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,115.7h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,115.7H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,118.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,118.4h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,118.4H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,118.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,118.4h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,118.4H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,121h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,121h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,121H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,121h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,121h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,121H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,123.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,123.7h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,123.7H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,123.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,123.7h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,123.7H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,126.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,126.3h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,126.3H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,126.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,126.3h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,126.3H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,128.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,128.9h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,128.9H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,128.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,128.9h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,128.9H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,131.6h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,131.6h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,131.6H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,131.6h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,131.6h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,131.6H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,134.2h-1.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M175,134.2h-1.7V136H175Z" fill="#cdb99a" />
        <Path d="M177.7,134.2H176V136h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,134.2h-1.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M183,134.2h-1.7V136H183Z" fill="#cdb99a" />
        <Path d="M185.7,134.2H184V136h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,136.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,136.9h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,136.9H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,136.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,136.9h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,136.9H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,139.5h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,139.5h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,139.5H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,139.5h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,139.5h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,139.5H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,142.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,142.1h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,142.1H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,142.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,142.1h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,142.1H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,144.8h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,144.8h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,144.8H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,144.8h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,144.8h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,144.8H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,147.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,147.4h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,147.4H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,147.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,147.4h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,147.4H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,150.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,150.1h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,150.1H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,150.1h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,150.1h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,150.1H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,152.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,152.7h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,152.7H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,152.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,152.7h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,152.7H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,155.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,155.4h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,155.4H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,155.4h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,155.4h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,155.4H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,158h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,158h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,158H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,158h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,158h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,158H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,160.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,160.7h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,160.7H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,160.7h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,160.7h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,160.7H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,163.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,163.3h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M177.7,163.3H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,163.3h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,163.3h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,163.3H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M172.3,165.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M175,165.9h-1.7v1.8H175Z" fill="#cdb99a" />
        <Path d="M180.8,101.8h-5v3.9h5Z" fill="#cdb99a" />
        <Path d="M181.5,100.1h-6.2v1.7h6.2Z" fill="#dacbb5" />
        <Path d="M177.7,165.9H176v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M180.3,165.9h-1.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M183,165.9h-1.7v1.8H183Z" fill="#cdb99a" />
        <Path d="M185.7,165.9H184v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M186.3,104.9H170.5v1.7h15.8Z" fill="#dacbb5" />
        <Path d="M51.6,106.6H39v3.9H51.6Z" fill="#cdb99a" />
        <Path d="M54.7,110H35.9v59.6H54.7Z" fill="#dacbb5" />
        <Path d="M39.4,113.1H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,113.1H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,113.1H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,113.1H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,113.1H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,113.1H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,115.7H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,115.7H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,115.7H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,115.7H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,115.7H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,115.7H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,118.4H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,118.4H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,118.4H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,118.4H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,118.4H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,118.4H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,121H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,121H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,121H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,121H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,121H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,121H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,123.7H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,123.7H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,123.7H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,123.7H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,123.7H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,123.7H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,126.3H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,126.3H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,126.3H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,126.3H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,126.3H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,126.3H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,128.9H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,128.9H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,128.9H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,128.9H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,128.9H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,128.9H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,131.6H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,131.6H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,131.6H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,131.6H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,131.6H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,131.6H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,134.2H37.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,134.2H40.4V136h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,134.2H43.1V136h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,134.2H45.7V136h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,134.2H48.4V136h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,134.2H51.1V136h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,136.9H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,136.9H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,136.9H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,136.9H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,136.9H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,136.9H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,139.5H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,139.5H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,139.5H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,139.5H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,139.5H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,139.5H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,142.1H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,142.1H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,142.1H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,142.1H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,142.1H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,142.1H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,144.8H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,144.8H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,144.8H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,144.8H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,144.8H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,144.8H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,147.4H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,147.4H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,147.4H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,147.4H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,147.4H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,147.4H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,150.1H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,150.1H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,150.1H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,150.1H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,150.1H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,150.1H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,152.7H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,152.7H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,152.7H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,152.7H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,152.7H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,152.7H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,155.4H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,155.4H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,155.4H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,155.4H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,155.4H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,155.4H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,158H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,158H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,158H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,158H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,158H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,158H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,160.7H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,160.7H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,160.7H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,160.7H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,160.7H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,160.7H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,163.3H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,163.3H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M44.8,163.3H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,163.3H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,163.3H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,163.3H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M39.4,165.9H37.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M42.1,165.9H40.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.9,101.8h-5v3.9h5Z" fill="#cdb99a" />
        <Path d="M48.6,100.1H42.4v1.7h6.2Z" fill="#dacbb5" />
        <Path d="M44.8,165.9H43.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M47.4,165.9H45.7v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M50.1,165.9H48.4v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M52.8,165.9H51.1v1.8h1.7Z" fill="#cdb99a" />
        <Path d="M53.4,104.9H37.6v1.7H53.4Z" fill="#dacbb5" />
        <Path d="M215.9,127.7H186.8v39.8h29.1Z" fill="#cfb997" />
        <Path d="M192.3,129.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,129.7H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,129.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,129.7h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,131.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,131.5H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,131.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,131.5h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,133.2h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,133.2H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,133.2h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,133.2h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,135h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,135H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,135h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,135h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,136.8h-2.6V138h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,136.8H193.8V138h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,136.8h-2.6V138h2.6Z" fill="#c2a87e" />
        <Path d="M213,136.8h-2.6V138H213Z" fill="#c2a87e" />
        <Path d="M192.3,138.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,138.5H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,138.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,138.5h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,140.3h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,140.3H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,140.3h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,140.3h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,142.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,142.1H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,142.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,142.1h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,143.9h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,143.9H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,143.9h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,143.9h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,145.6h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,145.6H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,145.6h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,145.6h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,147.4h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,147.4H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,147.4h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,147.4h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,149.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,149.1H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,149.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,149.1h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,150.9h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,150.9H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,150.9h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,150.9h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,152.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,152.7H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,152.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,152.7h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,154.4h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,154.4H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,154.4h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,154.4h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,156.2h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,156.2H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,156.2h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,156.2h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,158h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,158H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,158h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,158h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,159.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,159.7H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,159.7h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,159.7h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,161.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,161.5H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,161.5h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,161.5h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,163.3h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,163.3H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,163.3h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,163.3h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M192.3,165.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M204.5,165.1H193.8v1.2h10.7Z" fill="#c2a87e" />
        <Path d="M208.9,165.1h-2.6v1.2h2.6Z" fill="#c2a87e" />
        <Path d="M213,165.1h-2.6v1.2H213Z" fill="#c2a87e" />
        <Path d="M217,127.2H185.2v1.2H217Z" fill="#c2a87e" />
        <Path
          d="M55.5,167.2c-1.3-1.5-1.3-3.1,2.4-5.7,5.7-4.2,12.8-5.5,15.9-3,2.2,1.9,1.7,6.5-1.1,8.7C67.4,171.3,55.5,167.2,55.5,167.2Z"
          fill="#246620"
        />
        <Path
          d="M71.5,167.2c1.4-2.8,1.1-5.6-1.1-7.5a8,8,0,0,0-4-1.7c2.9-.7,5.4-.5,6.9.8,2.1,1.8,1.4,5.2-1.5,8.4Z"
          fill="#1f771a"
        />
        <Path
          d="M49.4,165.4c4.1-.4,3.3-3.2,3-6.7s0-6.5-4-6.1-7.2,3.5-6.9,7.1S45.3,165.8,49.4,165.4Z"
          fill="#246620"
        />
        <Path
          d="M43.3,160.3a9.59,9.59,0,0,0,1,3.4,5.2,5.2,0,0,1-2.6-4.2c-.2-2.7,1.8-5.2,4.7-6.1A8,8,0,0,0,43.3,160.3Z"
          fill="#1f771a"
        />
        <Path
          d="M58.5,151c-2.8,2.4.3,4,3.6,6.3s5.6,4.6,8.4,2.1,2.4-6.3-.9-8.6S61.3,148.6,58.5,151Z"
          fill="#246620"
        />
        <Path
          d="M67.5,151.4a15.74,15.74,0,0,0-3.7-1.8,9.59,9.59,0,0,1,5.7,1.5c2.6,1.8,3.2,4.6,1.8,6.7C71.5,155.7,70.2,153.2,67.5,151.4Z"
          fill="#246620"
        />
        <Path
          d="M62.5,167.2a3.67,3.67,0,0,1,4.6-.8,6.38,6.38,0,0,1,1.4.8Z"
          fill="#246620"
        />
        <Path
          d="M50.3,150.8c-.3,3.2,3.4,2.9,8,3s8.2.6,8.5-2.6-3.1-5.9-7.7-6S50.6,147.6,50.3,150.8Z"
          fill="#246620"
        />
        <Path
          d="M57.9,146.6a16.35,16.35,0,0,0-4.5.5,9.94,9.94,0,0,1,5.8-1.7c3.5.1,6.3,1.9,6.8,4.2C64.6,147.9,61.5,146.7,57.9,146.6Z"
          fill="#1f771a"
        />
        <Path
          d="M45.4,158.2c3.4,1.6,4.4-.4,6.1-2.6s3.6-3.8.2-5.4-7.6-1.1-9.4,1.1S41.9,156.6,45.4,158.2Z"
          fill="#246620"
        />
        <Path
          d="M43.4,152.6a5.18,5.18,0,0,0-1.1,2.4,3.16,3.16,0,0,1,.2-3.6c1.4-1.7,4.3-2.3,7.1-1.5A8,8,0,0,0,43.4,152.6Z"
          fill="#1f771a"
        />
        <Path
          d="M45.3,160c1.5,5.5,4.9,4,9.4,3.1s8.3-.9,6.8-6.4-6.3-9.2-10.8-8.3S43.8,154.5,45.3,160Z"
          fill="#1f771a"
        />
        <Path
          d="M69.4,167.2H55.2a15.14,15.14,0,0,1-1.4-3.7c-2.2-8.1-.4-15.5,4.1-16.4s9.9,5,12.1,13.1C71,164.2,70.6,166.1,69.4,167.2Z"
          fill="#1f771a"
        />
        <Path
          d="M69.9,166.8c-2.6,4.8-26.9,2-26.7-.9.2-6.4,3.1-9.3,10.2-10.7,7.4-1.5,14.6,2,16.2,7.7C70.1,165,70.7,165.4,69.9,166.8Z"
          fill="#1f771a"
        />
        <Path
          d="M47.5,167.2c-1.5-5.2,3.7-5.6,9.4-6.7,5.9-1.2,10.4-3,12,3a12,12,0,0,1,.4,3.7C69.2,167.2,48.9,172.4,47.5,167.2Z"
          fill="#1f771a"
        />
        <Path
          d="M46.4,162.6c2.1,2.7,6.2,3.2,9.4,1.6s4.4-4.8,2.2-7.5a8.06,8.06,0,0,0-9.6-2C45.2,156.4,44.3,159.9,46.4,162.6Z"
          fill="#1f771a"
        />
        <Path
          d="M56.7,167.2a2.09,2.09,0,0,1-.4-.6,9.5,9.5,0,0,0,1.8.6Z"
          fill="#246620"
        />
        <Path
          d="M66.7,167.2H62c3.2-.6,5.5-2.7,5.9-4.9a1.78,1.78,0,0,1,.4,1A3.88,3.88,0,0,1,66.7,167.2Z"
          fill="#246620"
        />
        <Path
          d="M48.5,156.3a9.73,9.73,0,0,0-2.7,2.1,4.82,4.82,0,0,1,2.8-3.5,7.57,7.57,0,0,1,7.7.8A10.25,10.25,0,0,0,48.5,156.3Z"
          fill="#a7e5b1"
        />
        <Path
          d="M54.9,159.9c-1.3,2.6.2,5,3.1,5.8s6.2-.3,7.4-2.9,0-5.3-2.9-6.1A6.74,6.74,0,0,0,54.9,159.9Z"
          fill="#1f771a"
        />
        <Path
          d="M61.3,157.6a8.2,8.2,0,0,0-3.1-.3,7.07,7.07,0,0,1,4.3-.5,3.86,3.86,0,0,1,3,4.5C65.2,159.7,63.6,158.2,61.3,157.6Z"
          fill="#a7e5b1"
        />
        <Path
          d="M50.7,167.3a6.48,6.48,0,0,0,7.9,1.1c2.6-1.4,3.5-4.1,1.6-6.3a7,7,0,0,0-8.2-1.4C49.4,162.2,48.8,165.1,50.7,167.3Z"
          fill="#1f771a"
        />
        <Path
          d="M52.2,162a6.66,6.66,0,0,0-2.2,1.8,3.88,3.88,0,0,1,2.2-3,6.12,6.12,0,0,1,6.5.5A8.92,8.92,0,0,0,52.2,162Z"
          fill="#a7e5b1"
        />
        <Path
          d="M50.7,148.7a7.45,7.45,0,0,1,5.2,1,3,3,0,0,0-.5.7,8.6,8.6,0,0,0-3.2,0,8.39,8.39,0,0,0-6.7,8.4C44.4,154,46.7,149.6,50.7,148.7Z"
          fill="#a7e5b1"
        />
        <Path
          d="M57.7,150.9a6.67,6.67,0,0,0-3.9,2.4c.6-3.1,2.1-5.2,4.3-5.7,3.4-.7,7.5,3.1,9.9,8.8C65.2,152.4,61.3,150.2,57.7,150.9Z"
          fill="#a7e5b1"
        />
        <Path
          d="M66.5,160.9c1.6,1.8,2.9,3.3,4.9,2.2s2.4-3.5.8-5.4a5.64,5.64,0,0,0-4.9-1.8C64.6,156.2,64.9,159,66.5,160.9Z"
          fill="#1f771a"
        />
        <Path
          d="M71,157.7a9.5,9.5,0,0,0-1.9-1.6,5.19,5.19,0,0,1,3.1,1.6,3,3,0,0,1,0,4.3C72.7,160.9,72.3,159.2,71,157.7Z"
          fill="#a7e5b1"
        />
        <Rect x="70.8" y="120.5" width="20.5" height="45.2" fill="#ac5e2e" />
        <Rect x="69.8" y="120.5" width="15.1" height="45.2" fill="#c86d36" />
        <Path
          d="M117.3,117.8c-6.9,6.7-20.5,7.7-23.6,3.1-9.8,5.1-15.3,5.4-24.7,0-6.2,1.8-6.4,2.9-10.2,2.9A20.81,20.81,0,0,1,38,102.9a20.86,20.86,0,0,1-6.9-40.6,20.5,20.5,0,0,1-3.6-11.7,20.91,20.91,0,0,1,21-20.9,20.27,20.27,0,0,1,11.7,3.6,20.86,20.86,0,0,1,39.4,0,20.5,20.5,0,0,1,11.7-3.6,20.91,20.91,0,0,1,21,20.9,20.5,20.5,0,0,1-3.6,11.7,20.81,20.81,0,0,1-6.9,40.5C122,108.3,121.5,113.7,117.3,117.8Z"
          fill="#246620"
        />
        <Path
          d="M127.1,56.3A19.9,19.9,0,0,0,130.6,45a20.21,20.21,0,0,0-20.2-20.2,20.61,20.61,0,0,0-11.3,3.4,20.12,20.12,0,0,0-38,0,19.82,19.82,0,0,0-11.3-3.4A20.26,20.26,0,0,0,33,56.3a20.15,20.15,0,0,0,6.6,39.2,20.12,20.12,0,0,0,20.1,20.2,9.88,9.88,0,0,0,3.7-.6c3,6.5,10,11,18.2,11,7.9,0,14.8-4.3,17.9-10.5,5.2.4,12.3-1.4,16.6-5.6,4-4,4.5-9.2,4.5-14.4a20.3,20.3,0,0,0,20.3-19.9A20.61,20.61,0,0,0,127.1,56.3Z"
          fill="#258b20"
        />
        <Path
          d="M119.1,35.9c-7.5-6.1-11.3-3.7-11.3-3.7,6.5,6.5,10.2,10.1,16.7,16.5C126.4,43.6,119.1,35.9,119.1,35.9Z"
          fill="#a7e6b1"
        />
        <Path
          d="M112.9,165.1c1.9-2.2,2-4.6-3.5-8.6-8.6-6.3-19.3-8.3-23.9-4.5-3.4,2.8-2.6,9.8,1.7,13.1C95.1,171.3,112.9,165.1,112.9,165.1Z"
          fill="#246620"
        />
        <Path
          d="M88.8,165.1c-2.1-4.2-1.7-8.5,1.6-11.3a12.1,12.1,0,0,1,6.1-2.6c-4.3-1-8.2-.7-10.4,1.2-3.2,2.7-2.1,7.8,2.2,12.6h.5Z"
          fill="#258b20"
        />
        <Path
          d="M122.2,162.5c-6.1-.5-5-4.8-4.5-10.1s-.1-9.8,6.1-9.2,10.8,5.3,10.3,10.6S128.3,163,122.2,162.5Z"
          fill="#246620"
        />
        <Path
          d="M131.2,154.8a11,11,0,0,1-1.6,5.1,8.68,8.68,0,0,0,4-6.3c.3-4.1-2.7-7.9-7-9.2A11.39,11.39,0,0,1,131.2,154.8Z"
          fill="#258b20"
        />
        <Path
          d="M108.4,140.9c4.2,3.7-.4,6-5.4,9.5s-8.5,6.8-12.7,3.2-3.6-9.5,1.4-13S104.2,137.2,108.4,140.9Z"
          fill="#246620"
        />
        <Path
          d="M94.8,141.4a20.65,20.65,0,0,1,5.6-2.7,13.52,13.52,0,0,0-8.5,2.3c-3.9,2.7-4.8,6.9-2.6,10.2C88.8,147.9,90.8,144.2,94.8,141.4Z"
          fill="#246620"
        />
        <Path
          d="M102.4,165.1c-1.8-1.8-3.7-2.6-6.9-1.2a9.63,9.63,0,0,0-2,1.2Z"
          fill="#246620"
        />
        <Path
          d="M120.8,140.5c.5,4.8-5.1,4.3-12,4.5s-12.3,1-12.8-3.8,4.7-8.8,11.5-9S120.3,135.7,120.8,140.5Z"
          fill="#246620"
        />
        <Path
          d="M109.4,134.2a23.78,23.78,0,0,1,6.7.7,14.22,14.22,0,0,0-8.7-2.5c-5.3.1-9.4,2.8-10.3,6.3C99.3,136.1,103.9,134.3,109.4,134.2Z"
          fill="#258b20"
        />
        <Path
          d="M128.1,151.7c-5.2,2.4-6.6-.6-9.2-3.9s-5.5-5.7-.3-8.1,11.5-1.7,14.1,1.6S133.3,149.3,128.1,151.7Z"
          fill="#246620"
        />
        <Path
          d="M131.1,143.2a8.06,8.06,0,0,1,1.6,3.7,4.83,4.83,0,0,0-.3-5.4c-2-2.6-6.5-3.4-10.7-2.3A11.58,11.58,0,0,1,131.1,143.2Z"
          fill="#258b20"
        />
        <Path
          d="M128.3,154.4c-2.2,8.3-7.4,6-14.1,4.7s-12.5-1.3-10.2-9.6,9.5-13.8,16.2-12.5S130.5,146.1,128.3,154.4Z"
          fill="#258b20"
        />
        <Path
          d="M92,165.1h21.5a22,22,0,0,0,2.1-5.6c3.3-12.3.6-23.3-6.1-24.7s-14.9,7.5-18.2,19.7C89.6,160.6,90.2,163.5,92,165.1Z"
          fill="#258b20"
        />
        <Path
          d="M91.2,164.6c3.8,7.3,40.4,3,40.2-1.4-.3-9.6-4.7-14-15.3-16.2-11.1-2.2-22,3-24.4,11.6C90.9,161.9,90.1,162.5,91.2,164.6Z"
          fill="#258b20"
        />
        <Path
          d="M125,165.1c2.2-7.8-5.6-8.4-14.1-10.1-8.8-1.8-15.6-4.5-18.1,4.5a18.15,18.15,0,0,0-.6,5.6C92.3,165.1,122.8,173,125,165.1Z"
          fill="#258b20"
        />
        <Path
          d="M126.6,158.2c-3.2,4.1-9.3,4.9-14.1,2.4s-6.6-7.2-3.4-11.2,9.7-5.4,14.5-3S129.8,154.1,126.6,158.2Z"
          fill="#258b20"
        />
        <Path
          d="M111.1,165.1c.2-.3.5-.6.7-.9a10.71,10.71,0,0,1-2.7.9Z"
          fill="#246620"
        />
        <Path
          d="M96,165.1h7.1c-4.8-1-8.3-4-8.8-7.3a5.23,5.23,0,0,0-.7,1.5C93.1,161.3,94.1,163.5,96,165.1Z"
          fill="#246620"
        />
        <Path
          d="M123.4,148.8a13.4,13.4,0,0,1,4.1,3.1,7.54,7.54,0,0,0-4.2-5.3,11.24,11.24,0,0,0-11.7,1.2A15.88,15.88,0,0,1,123.4,148.8Z"
          fill="#a7e5b1"
        />
        <Path
          d="M113.8,154.1c1.9,3.9-.3,7.5-4.7,8.7s-9.3-.5-11.2-4.3,0-8,4.4-9.2A10.38,10.38,0,0,1,113.8,154.1Z"
          fill="#258b20"
        />
        <Path
          d="M104.2,150.7a12,12,0,0,1,4.6-.4,9.14,9.14,0,0,0-6.5-.7c-3.4.9-5.2,3.8-4.5,6.8C98.3,153.9,100.7,151.7,104.2,150.7Z"
          fill="#a7e5b1"
        />
        <Path
          d="M120.1,165.4c-2.8,3.3-8,3.8-11.9,1.7s-5.2-6.2-2.4-9.5a10.31,10.31,0,0,1,12.3-2.1C122.1,157.6,123,162,120.1,165.4Z"
          fill="#258b20"
        />
        <Path
          d="M117.8,157.4a11.39,11.39,0,0,1,3.3,2.7,5.74,5.74,0,0,0-3.3-4.5,9.54,9.54,0,0,0-9.9.7A13.33,13.33,0,0,1,117.8,157.4Z"
          fill="#a7e5b1"
        />
        <Path
          d="M120.1,137.4a11.51,11.51,0,0,0-7.8,1.5,4.44,4.44,0,0,1,.8,1.1,11.11,11.11,0,0,1,4.8.1c6.1,1.2,10,6.5,10,12.7C129.6,145.4,126.2,138.6,120.1,137.4Z"
          fill="#a7e5b1"
        />
        <Path
          d="M109.6,140.6a10.38,10.38,0,0,1,5.9,3.6c-.9-4.6-3.1-7.9-6.4-8.5-5.2-1-11.3,4.6-14.9,13.2C98.3,143,104.2,139.5,109.6,140.6Z"
          fill="#a7e5b1"
        />
        <Path
          d="M96.4,155.7c-2.4,2.8-4.4,5-7.4,3.3s-3.7-5.3-1.2-8.1a8.28,8.28,0,0,1,7.4-2.7C99.3,148.6,98.8,152.9,96.4,155.7Z"
          fill="#258b20"
        />
        <Path
          d="M89.6,150.9a10.92,10.92,0,0,1,2.9-2.4,7.29,7.29,0,0,0-4.7,2.5,4.41,4.41,0,0,0,.1,6.5C87.1,155.7,87.7,153.1,89.6,150.9Z"
          fill="#a7e5b1"
        />
        <Path
          d="M218.5,162.2a1.79,1.79,0,0,0,1.8-1.8V56a10.82,10.82,0,0,0-10.8-10.8H194.1a1.8,1.8,0,1,0,0,3.6h15.4a7.15,7.15,0,0,1,7.1,7.2V160.3A2,2,0,0,0,218.5,162.2Z"
          fill="#acacac"
        />
        <Path
          d="M213.4,164V109.7a1.75,1.75,0,0,1,1.7-1.7h7.6a1.75,1.75,0,0,1,1.7,1.7V164a1.75,1.75,0,0,1-1.7,1.7h-7.6A1.69,1.69,0,0,1,213.4,164Z"
          fill="#5a5a5a"
        />
        <Path
          d="M202.4,55.3H186v4.6a3.22,3.22,0,0,0,3.2,3.2h10.1a3.22,3.22,0,0,0,3.2-3.2V55.3Z"
          fill="#e8ba48"
        />
        <Path
          d="M199.7,56.6H188.2v2.9a2.12,2.12,0,0,0,2.2,2h7.1a2.12,2.12,0,0,0,2.2-2Z"
          fill="#ffe197"
        />
        <Path
          d="M202.4,55.3H186V50.7a3.59,3.59,0,0,1,3.6-3.6h9.2a3.59,3.59,0,0,1,3.6,3.6v4.6Z"
          fill="#838383"
        />
        <Path
          d="M202.4,53.5H186V48.9a3.59,3.59,0,0,1,3.6-3.6h9.2a3.59,3.59,0,0,1,3.6,3.6v4.6Z"
          fill="#565656"
        />
        <Path
          d="M197.3,45.9h-5.7V44.1a1.44,1.44,0,0,1,1.3-1.5h3.2a1.44,1.44,0,0,1,1.3,1.5v1.8Z"
          fill="#acacac"
        />
        <Path
          d="M214.4,108h4.8a1.75,1.75,0,0,0-1.7,1.7V164a1.75,1.75,0,0,0,1.7,1.7h-4.8a1.75,1.75,0,0,1-1.7-1.7V109.7A1.75,1.75,0,0,1,214.4,108Z"
          fill="#444"
        />
        <Path
          d="M2.1,165.7H272a2.11,2.11,0,0,1,2.1,2.1h0a2.11,2.11,0,0,1-2.1,2.1H2.1A2.11,2.11,0,0,1,0,167.8H0A2.05,2.05,0,0,1,2.1,165.7Z"
          fill="#c4c4c4"
        />
      </Svg>
    </View>
  );
};

export default Logo;
