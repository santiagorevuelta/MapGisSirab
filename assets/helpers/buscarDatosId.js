import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {catchError, consultToken, notifyMessage} from '../core/general';

export default async function (id, type) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }
  let url = `${tsconfig[tsconfig.use][type].url}/${id}`;
  const config = {
    headers: {
      'access-token': token,
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
