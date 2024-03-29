const axios = require('axios');
import tsconfig from '../tsconfig.json';
import {catchError, consultToken, notifyMessage} from '../core/general';

export default async function (formData, type) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }

  let url = tsconfig.prefix + tsconfig[tsconfig.use][type].url;
  const config = {
    headers: {
      'access-token': token,
      'Content-Type': 'application/json',
      origen: 'app',
    },
  };
  let response;
  await axios
    .post(url, formData, config)
    .then(function (res) {
      response = res.data;
    })
    .catch(function (error) {
      response = error.message;
      catchError(error.message);
    });
  return response;
}
