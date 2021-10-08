import React, {useState} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import TextInput from './TextInputSearch';
import Home from '../icons/Home';
import Location from '../icons/Ubicacion';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {getLocalize} from '../map/BackgroundMap';

const Header = () => {
  const [valor, setValor] = useState('');
  return (
    <View style={styles.header}>
      <Pressable style={styles.icons}>
        <Home />
      </Pressable>
      <View style={styles.search}>
        <TextInput
          returnKeyType="next"
          value={valor}
          onChangeText={text => setValor(text)}
          autoCapitalize="none"
          keyboardType="default"
        />
        <IconAntDesign
          name={'search1'}
          color={theme.colors.headers}
          style={styles.icon}
          size={responsiveFontSize(3)}
        />
      </View>
      <Pressable
        style={styles.icons}
        onPress={() => {
          getLocalize();
        }}>
        <Location />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 10,
    zIndex: 1,
    color: theme.colors.secondary,
    paddingVertical: 12,
    textAlign: 'center',
    flex: 1,
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
    padding: 10,
    right: 0,
  },
  search: {
    bottom: 0,
  },
  icons: {
    top: 3,
    zIndex: 3,
    backgroundColor: '#fff',
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    padding: 8,
    borderRadius: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
});
