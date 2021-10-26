import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {notifyMessage, consultToken} from '../core/general';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function (filtros, page = 1) {
  let filtrosStr = JSON.stringify(filtros);
  AsyncStorage.setItem('filtros', filtrosStr);
  const params = new URLSearchParams({
    filtros: filtrosStr,
  }).toString();
  //'{"codigo_arbol":"","id_especie":["252","1199"],"fecha":"07/09/2021 - 14/10/2021","id_tipo_arbol":"6","id_tipo_origen_arbol":"2","puntos":"POINT(-75.64664825439321 6.243447869869807)"}',

  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin token');
    return;
  }
  let url = `${tsconfig[tsconfig.use].searchTree.url}?${params}`;
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
