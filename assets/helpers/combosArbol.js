import axios from "axios";
import tsconfig from "../tsconfig.json";
import { consultToken, notifyMessage } from "../core/general";

export default async function (data) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage('Sin token');
    return;
  }
  let url = tsconfig[tsconfig.use].searchTree.combos;
  const config = {
    url: url,
    method: 'get',
    headers: {
      'access-token': token
    },
  };
   data = new Promise(resolve => {
    axios(config)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        resolve([]);
      });
  })
  return data
}
