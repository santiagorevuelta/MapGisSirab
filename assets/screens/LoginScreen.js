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
  const [user, setUser] = useState({value: ''});
  const [password, setPassword] = useState({value: ''});
  const [visPass, setPasswordVisi] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);

  const onLoginPressed = async () => {
    try {
      let emailError = usuarioValidator(user.value);
      let passwordError = passwordValidator(password.value);
      if (emailError) {
        notifyMessage(emailError);
      } else if (passwordError) {
        notifyMessage(passwordError);
      } else {
        await loginValidator(user.value, password.value, {navigation});
      }
    } catch (e) {
      console.error('onLoginPressed ' + e);
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
          onChangeText={text => setUser({value: text})}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="default"
          isFocus={isFocus}
          onFocus={() => setIsFocus(true)}
        />
        <TxtPass
          label="Contraseña"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text})}
          secureTextEntry={visPass}
          setPasswordVi={event => setPasswordVisi(event)}
          isFocusp={isFocusPass}
          onBlur={() => setIsFocusPass(false)}
          onFocus={() => setIsFocusPass(true)}
        />
        <Button
          mode="contained"
          onPress={() => {
            onLoginPressed().then(() => {});
          }}>
          Ingresar
        </Button>
      </Background>
      <View style={styles.footer}>
        <FooterLogo />
        <Text style={styles.copy}>
          Por {'\n'}
          <Text style={{fontWeight: 'bold'}}>H&G Consultores S.A.S</Text>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  copy: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Roboto',
    color: theme.colors.secondary,
    textAlign: 'center',
    zIndex: -1,
  },
  logo: {
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    bottom: responsiveHeight(0),
  },
});
