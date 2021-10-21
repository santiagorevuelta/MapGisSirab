const {Platform, ToastAndroid, Alert} = require('react-native');
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tsconfig from '../tsconfig.json';
function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  } else {
    Alert.alert(msg);
  }
}

async function consultToken({navigation}) {
  let url = tsconfig[tsconfig.use].tokenValidator.url;
  await axios
    .post(url)
    .then(res => {
      let data = res.data;
      if (data && data !== '' && data !== 'Sin autenticacion') {
        notifyMessage('Token ok');
        AsyncStorage.setItem('token', data);
      } else {
        AsyncStorage.setItem('token', '');
      }
    })
    .catch(error => {
      notifyMessage(error.message);
      AsyncStorage.setItem('token', '');
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    });
}

module.exports = {notifyMessage, consultToken};
