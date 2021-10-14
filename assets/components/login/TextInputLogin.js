import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  TextInput as Input,
} from 'react-native';
import {theme} from '../../core/theme';
import Usuario from '../icons/Usuario';
import Ver from '../icons/Ver';
import NoVer from '../icons/NoVer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

function TextInput({errorText, description, ...props}) {
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, props.isFocus ? styles.focusOn : {}]}
        placeholder={props.label}
        {...props}
      />
      <Usuario
        style={styles.image}
        colorIcon={props.isFocus ? theme.colors.primary : null}
      />
    </View>
  );
}

function TextInputPas({errorText, description, ...props}) {
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, props.isFocusp ? styles.focusOn : {}]}
        selectionColor={theme.colors.primary}
        placeholder={props.label}
        {...props}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => {
          props.setPasswordVi(!props.secureTextEntry);
        }}>
        {props.secureTextEntry ? (
          <Ver
            style={styles.imageVer}
            colorIcon={props.isFocusp ? theme.colors.primary : null}
          />
        ) : (
          <NoVer
            style={styles.imageNoVer}
            colorIcon={props.isFocusp ? theme.colors.primary : null}
          />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  pressable: {
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: responsiveWidth(4),
  },
  imageVer: {
    zIndex: 2,
  },
  imageNoVer: {
    zIndex: 2,
  },
  image: {
    right: 15,
    zIndex: 2,
    top: '25%',
    position: 'absolute',
  },
  input: {
    fontFamily: 'Roboto',
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#C4C4C4',
    marginVertical: 2,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  focusOn: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.focus,
  },
});

module.exports = {TextInput, TextInputPas};
