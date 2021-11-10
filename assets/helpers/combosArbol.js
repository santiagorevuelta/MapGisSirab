import axios from "axios";
import { consultToken, notifyMessage } from "../core/general";

export default async function(urlCombo) {
  console.log(urlCombo)
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
  let data = []
  await axios(config)
      .then(function(response) {
        data = response.data;
      })
      .catch(function(error) {
        console.info(urlCombo + " ", error.message);
      });
  return data;
}
