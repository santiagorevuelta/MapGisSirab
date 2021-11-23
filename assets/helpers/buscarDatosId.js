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
  console.log(url);
  const config = {
    url: url,
    method: 'get',
    headers: {
      'access-token': token,
    },
  };
  return new Promise(resolve => {
    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        resolve([]);
        catchError(error.message);
      });
  });
}
