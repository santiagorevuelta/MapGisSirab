import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {catchError, consultToken, notifyMessage} from '../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

export default async function (filtros, page = 1, type) {
  let filtrosStr = JSON.stringify(filtros);
  AsyncStorage.setItem('filtros', filtrosStr);

  const params = new URLSearchParams({
    filtros: base64.encode(filtrosStr),
  }).toString();

  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }
  let url = `${tsconfig[tsconfig.use][type].url}?${params}`;
  const config = {
    headers: {
      'access-token': token,
      limit: '4',
      page: page,
    },
  };

  let data = [];
  await axios
    .get(url, config)
    .then(function (response) {
      data = response.data;
    })
    .catch(function (error) {
      catchError(error.message);
    });
  return data;
}
