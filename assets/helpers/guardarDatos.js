import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {consultToken, notifyMessage} from '../core/general';

export default async function (formData, type) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin autenticación');
    return;
  }

  let url = tsconfig[tsconfig.use][type].url;
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
      console.log(error);
      response = error.message;
    });
  return response;
}
