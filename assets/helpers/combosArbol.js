import axios from 'axios';
import {catchError, consultToken, notifyMessage} from '../core/general';

export default async function (urlCombo) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin token');
    return;
  }
  const config = {
    headers: {
      'access-token': token,
    },
  };
  let resultCombo = [];
  await axios
    .get(urlCombo, config)
    .then(function (response) {
      resultCombo = response.data;
    })
    .catch(function (error) {
      console.info(urlCombo + ' urlCombo ', error.message);
      if (error.message) {
        catchError(error.message);
      }
    });
  return resultCombo;
}
