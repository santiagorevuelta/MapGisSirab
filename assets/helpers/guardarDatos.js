import axios from "axios";
import tsconfig from "../tsconfig.json";
import { consultToken, notifyMessage } from "../core/general";

export default async function(json, type) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage("Sin autenticación");
    return;
  }
  const params = new URLSearchParams({
    filtros: b64(json),
  }).toString();

  let url = `${tsconfig[tsconfig.use][type].url}/${json}`;
  console.log(url);
  const config = {
    url: url,
    method: "post",
    headers: {
      "access-token": token,
    },
  };
  return new Promise(resolve => {
    axios(config)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        resolve([]);
      });
  });
}
