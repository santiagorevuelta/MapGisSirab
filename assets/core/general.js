import React from "react";
import axios from "axios";
import tsconfig from "../tsconfig.json";

const { Platform, ToastAndroid, Alert } = require("react-native");

function notifyMessage(msg) {
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  } else {
    Alert.alert(msg);
  }
}

async function consultToken() {
  let token = null;
    let url = tsconfig[tsconfig.use].tokenValidator.url;
    await axios
      .post(url)
      .then(res => {
        let data = res.data;
        if (data && data !== "" && data !== "Sin autenticacion") {
           token = data;
        }
      })
      .catch(error => {
        notifyMessage("Error en el token");
      });
  return token
}

module.exports = { notifyMessage, consultToken };
