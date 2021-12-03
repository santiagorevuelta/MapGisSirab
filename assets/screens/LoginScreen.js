import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../core/general';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('abaez');
  const [password, setPassword] = useState('A1090496829');

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
      <Header>Sistema de información y Registro de Árboles</Header>
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
          onLoginPressed().then();
        }}>
        Ingresar
      </Button>
      <View style={styles.footer}>
        <FooterLogo style={styles.logoFooter} />
        <View style={styles.copy}>
          <Text>Por</Text>
          <Text style={{fontWeight: 'bold'}}>H&G Consultores S.A.S</Text>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  copy: {
    fontSize: responsiveFontSize(1.5),
    color: theme.colors.secondary,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: -1,
  },
  logo: {
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  logoFooter: {
    alignItems: 'center',
    bottom: responsiveHeight(-5),
  },
  footer: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    bottom: 0,
  },
});
