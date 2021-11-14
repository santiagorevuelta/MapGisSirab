import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {consultToken, notifyMessage} from '../core/general';

export default async function (id) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin token');
    return;
  }
  let url = `${tsconfig[tsconfig.use].searchTree.comboBarrio}/${id}`;
  const config = {
    headers: {
      'access-token': token,
    },
  };
  let data = {};
  await axios
    .get(url, config)
    .then(function (response) {
      data = response.data;
    })
    .catch(function (error) {
      console.info(url + ' ', error.message);
    });
  return data;
}
