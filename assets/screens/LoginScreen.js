import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { ActivityIndicator, Text } from "react-native-paper";
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
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../core/general';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = async () => {
    try {
      let emailError = usuarioValidator(user);
      let passwordError = passwordValidator(password);
      if (emailError) {
        notifyMessage(emailError);
      } else if (passwordError) {
        notifyMessage(passwordError);
      } else {
        await loginValidator(user, password, {navigation});
      }
    } catch (e) {
      console.error('onLoginPressed ' + e);
    }
  };

  return (
    <Background>
      <Logo style={styles.logo} />
      <Header>Sistema de informacion y Registro de Arboles</Header>
      <TxtUser
        label="Usuario"
        returnKeyType="next"
        value={user}
        onChangeText={text => setUser(text)}
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="name"
        keyboardType="default"
      />
      <TxtPass
        label="Contraseña"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        mode="contained"
        icon="login"
        onPress={() => {
          onLoginPressed().then(() => {});
        }}>
        Ingresar
      </Button>
      <View style={styles.footer}>
        <FooterLogo style={styles.logoFooter} />
        <Text style={styles.copy}>
          Por {'\n'}
          <Text style={{fontWeight: 'bold'}}>H&G Consultores S.A.S</Text>
        </Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  copy: {
    fontSize: responsiveFontSize(1.5),
    color: theme.colors.secondary,
    textAlign: 'center',
    zIndex: -1,
  },
  logo: {
    alignItems: 'center',
  },
  logoFooter: {
    alignItems: 'center',
    bottom: responsiveHeight(0),
    padding: 0,
    margin: 0,
  },
  footer: {
    justifyContent: 'center',
    marginTop: responsiveHeight(10),
    alignItems:'center'
  },
});
