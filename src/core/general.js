import React from 'react';
import axios from 'axios';
import tsconfig from '../tsconfig.json';
import {navigate} from '../components/map/BackgroundMap';
import {Alert, Platform, ToastAndroid} from 'react-native';

function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  } else {
    Alert.alert(msg);
  }
}

function campoObligatory(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(
      'El campo ' + msg + ' es obligatorio',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } else {
    Alert.alert(msg);
  }
}

async function consultToken() {
  let token = null;
  let url = tsconfig.prefix + tsconfig[tsconfig.use].tokenValidator.url;
  await axios
    .post(url, null, {
      params: {app: 7},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(res => {
      let data = res.data;
      if (data && data !== '' && data !== 'Sin autenticacion') {
        token = data;
      }
    })
    .catch(error => {
      console.log(error)
      navigate('LoginScreen');
      catchError(error.message);
    });
  return token;
}

function catchError(msg) {
  if (msg.indexOf('503') !== -1) {
    notifyMessage(
      'El servidor no está disponible en ese momento.\n Prueba de nuevo en unos minutos.',
    );
  } else if (msg.indexOf('500') !== -1) {
    notifyMessage('Hay un problema en el servidor');
  } else if (msg.indexOf('400') !== -1) {
    notifyMessage('Algo ha ido mal con la petición');
  } else if (msg.indexOf('401') !== -1) {
    //notifyMessage('No tienes permiso para recibir ese contenido');
  } else {
    notifyMessage(msg);
  }
}

module.exports = {notifyMessage, consultToken, catchError, campoObligatory};
