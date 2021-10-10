import React, {useState} from 'react';
import {StyleSheet, ToastAndroid} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/icons/Logo';
import FooterLogo from '../components/icons/FooterLogo';
import Header from '../components/login/Header';
import Button from '../components/login/Button';
import {
  TextInput as TxtUser,
  TextInputPas as TxtPass,
} from '../components/login/TextInputLogin';
import {theme} from '../core/theme';
import {usuarioValidator} from '../helpers/usuarioValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {loginValidator} from '../helpers/loginValidator';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [visPass, setPasswordVisi] = useState({value: true});
  const [isFocus, setIsFocus] = useState({value: false});
  const [isFocusp, setIsFocusp] = useState({value: false});

  const onLoginPressed = async () => {
    const emailError = usuarioValidator(user.value);
    const passwordError = passwordValidator(password.value);
    if (emailError) {
      ToastAndroid.show(emailError);
      return;
    }
    if (passwordError) {
      ToastAndroid.show(passwordError);
      return;
    }
    let login = await loginValidator(user.value, password.value);
    if (login == 0) {
      ToastAndroid.show('Usuario o clave no validos');
    } else if (login == 2) {
      ToastAndroid.show('Usuario sin servicios asociados');
    } else if (login == 'Error') {
      ToastAndroid.show('Hubo problemas con la peticion.');
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }
  };
  return (
    <>
      <Logo style={styles.logo} />
      <Background>
        <Header>Sistema de informacion y Registro de Arboles</Header>
        <TxtUser
          label="Usuario"
          returnKeyType="next"
          value={user.value}
          onChangeText={text => setUser({value: text, error: ''})}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="default"
          isFocus={isFocus.value}
          onBlur={() => {
            setIsFocus({...isFocus, value: false});
          }}
          onFocus={() => {
            setIsFocus({...isFocus, value: true});
          }}
        />
        <TxtPass
          label="Contraseña"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          secureTextEntry={visPass.value}
          setPasswordVi={event => setPasswordVisi({...visPass, value: event})}
          isFocusp={isFocusp.value}
          onBlur={() => {
            setIsFocusp({...isFocusp, value: false});
          }}
          onFocus={() => {
            setIsFocusp({...isFocusp, value: true});
          }}
        />
        <Button
          mode="contained"
          onPress={() => {
            onLoginPressed();
          }}>
          Ingresar
        </Button>
      </Background>
      <FooterLogo style={styles.footer} />
      <Text style={styles.copy}>
        Por {'\n'}
        <Text style={{fontWeight: 'bold'}}>H&G Consultores S.A.S</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  copy: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: theme.colors.secondary,
    paddingVertical: 12,
    textAlign: 'center',
    bottom: responsiveHeight(0),
    zIndex: -1,
  },
  logo: {
    alignItems: 'center',
  },
  footer: {
    bottom: responsiveHeight(-10),
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
