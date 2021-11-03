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
  return new Promise((resolve, reject) => {
    let url = tsconfig[tsconfig.use].tokenValidator.url;
    axios
      .post(url)
      .then(res => {
        let data = res.data;
        if (data && data !== "" && data !== "Sin autenticacion") {
          resolve(data);
        } else {
          resolve(null);
        }
      })
      .catch(error => {
        notifyMessage("Error en el token");
        resolve(null);
      });
  });
}

module.exports = { notifyMessage, consultToken };
