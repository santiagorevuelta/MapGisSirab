import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {catchError, consultToken, notifyMessage} from '../core/general';
import {setCoords} from '../components/map/BackgroundMap';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function (direccion) {
  if (direccion === '') {
    return;
  }

  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin token');
    return;
  }
  let url = `${tsconfig[tsconfig.use].search}${base64.encode(direccion)}`;
  const config = {
    headers: {
      'access-token': token,
    },
  };
  let data = {};
  await axios
    .get(url, config)
    .then(function (response) {
      data = response.data;
      if (
        data.Y === undefined ||
        data.X === undefined ||
        data.Y[0] === '0' ||
        data[0] === '0'
      ) {
        notifyMessage('No encontrada');
      } else {
        let currentLatitude = data.Y[0];
        let currentLongitude = data.X[0];
        let ubucacui = JSON.stringify({
          lat: currentLatitude,
          lng: currentLongitude,
        });
        AsyncStorage.setItem('ubicacion', ubucacui);
      }
    })
    .catch(function (error) {
      console.info(url + ' ', error.message);
      catchError(error.message);
    });
  await setCoords();
}
