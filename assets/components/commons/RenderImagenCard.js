import React, {useEffect} from 'react';
import config from '../../tsconfig.json';
import {Image} from 'react-native';
import axios from 'axios';

export default function ImageRender({style, url}) {
  const [imageError, setImageError] = React.useState(url == null);
  useEffect(() => {
    if (url !== null) {
      axios.get(config.urlfoto + url).then(a => {
        if (a.status) {
          setImageError(false);
        }
      });
    }
  }, [url]);

  return (
    <Image
      style={style}
      source={
        imageError
          ? require('../../assets/imagen.png')
          : {uri: config.urlfoto + url}
      }
    />
  );
}
