import React from 'react';
import {Card} from 'react-native-paper';

export default function ImageRender({style, url}) {
  const [imageError, setImageError] = React.useState(url == null);
  return (
    <Card.Cover
      style={style}
      source={imageError ? require('../../assets/imagen.png') : {uri: url}}
      onError={() => {
        setImageError(true);
      }}
    />
  );
}
