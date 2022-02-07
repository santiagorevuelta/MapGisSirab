import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {catchError, consultToken, notifyMessage} from '../core/general';

export default async function (id, type) {
  let data = [];
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return data;
  }
  let url = `${tsconfig.prefix}${tsconfig[tsconfig.use][type].url}/${id}`;
  const config = {
    headers: {
      'access-token': token,
    },
  };
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
