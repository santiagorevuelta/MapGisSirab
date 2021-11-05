import axios from "axios";
import { consultToken, notifyMessage } from "../core/general";

export default async function(id) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage("Sin token");
    return;
  }
  let url = `${tsconfig[tsconfig.use].searchTree.comboBarrio}/${id}`;
  const config = {
    url: url,
    method: "get",
    headers: {
      "access-token": token,
    },
  };
  let data = new Promise(resolve => {
    axios(config)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        console.info(url + " ", error.message);
        resolve([]);
      });
  });
  return data;
}
