import encode64 from './B64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {notifyMessage, consultToken} from '../core/general';
import tsconfig from '../tsconfig.json';
import axios from 'axios';

export async function loginValidator(user, password, {navigation}) {
  let url = tsconfig[tsconfig.use].loginValidator.url;
  let data = new FormData();
  data.append('id_Persona', encode64(user));
  data.append('password', encode64(password));
  data.append('app', '161');
  data.append('tipo', 1);
  axios
    .post(url, data)
    .then(res => {
      let resLogin = res.data;
      if (resLogin === 1) {
        consultToken({navigation});
        AsyncStorage.setItem('login', 'Ok');
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('pass', password);
        navigation.reset({
          index: 1,
          routes: [{name: 'Dashboard'}],
        });
      } else if (resLogin === 0) {
        notifyMessage('Usuario o clave no validos');
      } else if (resLogin === 2) {
        notifyMessage('Usuario sin servicios asociados');
      } else {
        notifyMessage('Hubo problemas con la peticion.');
      }
    })
    .catch(error => {
      notifyMessage('Hubo problemas con la peticion.');
    });
}
