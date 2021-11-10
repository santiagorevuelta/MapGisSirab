import axios from "axios";
import { consultToken, notifyMessage } from "../core/general";

export default async function(urlCombo) {
  let token = await consultToken();
  if (token === null) {
    notifyMessage("Sin token");
    return;
  }
  const config = {
    url: urlCombo,
    method: "get",
    headers: {
      "access-token": token,
    },
  };
  let resultCombo = []
  await axios(config)
      .then(function(response) {
        resultCombo = response.data;
      })
      .catch(function(error) {
        console.info(urlCombo + " ", error.message);
      });
  return resultCombo;
}
