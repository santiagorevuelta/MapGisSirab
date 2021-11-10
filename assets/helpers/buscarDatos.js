import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {notifyMessage, consultToken} from '../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import b64 from './B64'

export default async function (filtros, page = 1,type) {
  let filtrosStr = JSON.stringify(filtros);
  AsyncStorage.setItem('filtros', filtrosStr);
  const params = new URLSearchParams({
    filtros: b64(filtrosStr),
  }).toString();
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }
  let url = `${tsconfig[tsconfig.use][type].url}?${params}`;
  const config = {
    url: url,
    method: 'get',
    headers: {
      'access-token': token,
      page: page + '',
    },
  };

  let data = []
  await axios(config)
      .then(function (response) {
          data = response.data;
      })
      .catch(function (error) {
          console.log(error);
      });
  return data
}
