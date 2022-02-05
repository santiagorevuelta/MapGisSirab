import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import TextInput from './TextInputSearch';
import Location from '../icons/Ubicacion';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {getLocalize} from '../map/BackgroundMap';
import consultDireccion from '../../helpers/consultaDireccion';
import config from '../../tsconfig.json';
import ModalAlert from '../Alerta';
import MaterialCommunityIcon from 'react-native-paper/src/components/MaterialCommunityIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = props => {
  const [valor, setValor] = useState('');
  const [visible, setVisible] = useState(false);
  const [title] = useState('Alerta!');
  const [msg] = useState('¿Esta seguro de cerrar sesion?');
  const [buttons] = useState([
    {
      text: 'Cancelar',
      onPress: () => {
        setVisible(false);
      },
    },
    {
      text: 'Aceptar',
      onPress: () => {
        AsyncStorage.setItem('login', '');
        props.navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
        setVisible(false);
      },
    },
  ]);

  return (
    <View style={styles.header}>
      <ModalAlert
        modalVisible={visible}
        onModalVisible={setVisible}
        title={title}
        msg={msg}
        buttons={buttons}
      />
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
        style={styles.icons}>
        <MaterialCommunityIcon
          direction={'ltr'}
          name={'exit-to-app'}
          color={theme.colors.primary}
          size={responsiveFontSize(3.3)}
        />
      </TouchableOpacity>
      <View style={styles.search}>
        <TextInput
          returnKeyType="next"
          value={valor}
          onChangeText={text => setValor(text.trimStart())}
          autoCapitalize="none"
          placeholder={config.Search}
          onFocus={() => {
            setTimeout(() => {
              props.setIndexSnap(0);
            }, 100);
          }}
          onEndEditing={() => consultDireccion(valor)}
          onSubmitEditing={() => consultDireccion(valor)}
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => consultDireccion(valor)}>
          <IconAntDesign
            name={'search1'}
            color={theme.colors.headers}
            size={responsiveFontSize(2.5)}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.icons}
        onPress={() => {
          getLocalize();
        }}>
        <Location />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 10,
    zIndex: 0,
    elevation: 0,
    top: Platform.OS === 'android' ? 0 : 40,
    color: theme.colors.secondary,
    paddingVertical: 12,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    position: 'absolute',
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  search: {
    bottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    zIndex: 3,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    backgroundColor: theme.colors.blanco,
    padding: responsiveWidth(1),
    borderRadius: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
});
