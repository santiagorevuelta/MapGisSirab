import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput as Input,
} from 'react-native';
import {theme} from '../../core/theme';
import Usuario from '../icons/Usuario';
import Ver from '../icons/Ver';
import NoVer from '../icons/NoVer';
import styles from './TextInputLoginStyle';

function TextInput({...props}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, isFocus ? styles.focusOn : {}]}
        placeholder={props.label}
        isFocus={isFocus}
        onFocus={() => setIsFocus(true)}
        {...props}
      />
      <Usuario
        style={styles.image}
        colorIcon={isFocus ? theme.colors.primary : null}
      />
    </View>
  );
}

function TextInputPas({...props}) {
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [visPass, setPasswordVisi] = useState(true);
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input, isFocusPass ? styles.focusOn : {}]}
        selectionColor={theme.colors.primary}
        placeholder={props.label}
        isFocusp={isFocusPass}
        onBlur={() => setIsFocusPass(false)}
        onFocus={() => setIsFocusPass(true)}
        secureTextEntry={visPass}
        setPasswordVi={event => setPasswordVisi(event)}
        {...props}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => {
          setPasswordVisi(!visPass);
        }}>
        {visPass ? (
          <Ver
            style={styles.imageVer}
            colorIcon={isFocusPass ? theme.colors.primary : null}
          />
        ) : (
          <NoVer
            style={styles.imageNoVer}
            colorIcon={isFocusPass ? theme.colors.primary : null}
          />
        )}
      </Pressable>
    </View>
  );
}

module.exports = {TextInput, TextInputPas};
