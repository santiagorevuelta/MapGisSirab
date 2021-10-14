const {Platform, ToastAndroid, Alert} = require('react-native');
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}

async function consultToken() {
  let token = null;
  let url = 'https://www.medellin.gov.co/mapgis/validacionToken.do';
  await axios.post(url).then(res => {
    let data = res.data;
    if (data && data != '' && data != 'Sin autenticacion') {
      token = data;
      AsyncStorage.setItem('token', data);
    } else {
      AsyncStorage.setItem('token', '');
    }
  });
  return token;
}

module.exports = {notifyMessage, consultToken};
