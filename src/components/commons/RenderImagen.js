import React, {useEffect} from 'react';
import {Image} from 'react-native';
import config from '../../tsconfig.json';
import axios from 'axios';

export default function ImageRender({style, url}) {
  const [imageError, setImageError] = React.useState(url == null);
  useEffect(() => {
    const valid = async () => {
      if (url !== null) {
        await axios
          .get(config.urlfoto + url)
          .then(a => {
            if (a.status) {
              setImageError(false);
            }
          })
          .catch(e => {
            if (e.request.status) {
              setImageError(false);
            }
          });
      }
    };
    valid().then();
  }, [url]);

  return (
    <Image
      style={style}
      source={
        imageError
          ? require('../../assets/imagen.png')
          : {uri: config.urlfoto + url}
      }
      onError={({nativeEvent: {error}}) => {
        setImageError(true);
      }}
    />
  );
}