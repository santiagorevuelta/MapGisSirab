import React, {Component, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
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
import {consultToken, notifyMessage} from '../core/general';
import Renderload from '../components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginScreenView extends Component {
  constructor() {
    super();
    this.state = {
      loadApp: false,
      user: 'abaez',
      password: 'A1090496829',
    };
  }

  setLoadApp = data => {
    this.setState({loadApp: data});
  };
  setPassword = data => {
    this.setState({password: data});
  };
  setUser = data => {
    this.setState({user: data});
  };

  async componentDidMount() {
    this.setLoadApp(true);
    await consultToken();
    let res = await AsyncStorage.getItem('login');
    if (res === 'Ok') {
      this.props.navigation.reset({
        index: 1,
        routes: [{name: 'Dashboard'}],
      });
    }
    this.setLoadApp(false);
  }

  onLoginPressed = async () => {
    try {
      this.setLoadApp(true);
      let emailError = usuarioValidator(this.state.user);
      let passwordError = passwordValidator(this.state.password);
      if (emailError) {
        notifyMessage(emailError);
        this.setLoadApp(false);
      } else if (passwordError) {
        notifyMessage(passwordError);
        this.setLoadApp(false);
      } else {
        await loginValidator(
          this.state.user,
          this.state.password,
          this.props.navigation,
          this.setLoadApp,
        );
      }
    } catch (e) {
      this.setLoadApp(false);
      console.error('onLoginPressed ' + e);
    }
  };

  render() {
    return (
      <Background>
        <Renderload
          setLoadVisible={this.setLoadApp}
          load={this.state.loadApp}
        />
        <Logo style={styles.logo} />
        <Header>Sistema de información y Registro de Árboles</Header>
        <TxtUser
          label="Usuario"
          returnKeyType="next"
          value={this.state.user}
          onChangeText={text => this.setUser(text)}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="email-address"
        />
        <TxtPass
          label="Contraseña"
          returnKeyType="done"
          value={this.state.password}
          onChangeText={text => this.setPassword(text)}
        />
        <Button
          mode="contained"
          onPress={() => {
            this.onLoginPressed().then();
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
export default LoginScreenView;
