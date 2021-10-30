import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {notifyMessage, consultToken} from '../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function (filtros, page = 1,type) {
  let filtrosStr = JSON.stringify(filtros);
  AsyncStorage.setItem('filtros', filtrosStr);
  const params = new URLSearchParams({
    filtros: filtrosStr,
  }).toString();

  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }
  let url = `${tsconfig[tsconfig.use][type].url}?${params}`;
  console.log(url)
  const config = {
    url: url,
    method: 'get',
    headers: {
      'access-token': token,
      page: page + '',
    },
  };
  return new Promise(resolve => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve([]);
        console.log(error);
      });
  });
}
