import AsyncStorage from '@react-native-async-storage/async-storage';
import {consultToken, notifyMessage} from '../core/general';
import tsconfig from '../tsconfig.json';
import base64 from 'react-native-base64';
const axios = require('axios');

export async function loginValidator(user, password, navigation, setLoadApp) {
  let url = tsconfig[tsconfig.use].loginValidator.url;
  let data = new FormData();
  data.append('id_Persona', base64.encode(user));
  data.append('password', base64.encode(password));
  data.append('app', '161');
  data.append('tipo', 1);
  axios
    .post(url, data)
    .then(res => {
      let resLogin = res.data;
      if (resLogin === 1) {
        consultToken();
        AsyncStorage.setItem('login', 'Ok');
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('pass', password);
        navigation.reset({
          index: 1,
          routes: [{name: 'Dashboard'}],
        });
        setLoadApp(false);
      } else if (resLogin === 0) {
        notifyMessage('Usuario o clave no validos');
        setLoadApp(false);
      } else if (resLogin === 2) {
        notifyMessage('Usuario sin servicios asociados');
        setLoadApp(false);
      } else {
        notifyMessage('Hubo problemas con la peticion.');
        setLoadApp(false);
      }
    })
    .catch(error => {
      notifyMessage('Hubo problemas con la peticion.');
      setLoadApp(false);
    });
}
