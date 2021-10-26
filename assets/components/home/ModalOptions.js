import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from '../css/home/ModalOptionsCss';
import {theme} from '../../core/theme';
import Animated from 'react-native-reanimated';

import ConsultarArbol from '../icons/ConsultarArbol';

export default props => {
  return (
    <Animated.View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? theme.pressed : theme.offPressed,
          },
          styles.modal,
        ]}
        onPress={() => {
          props.setOption('Consulta');
        }}>
        <ConsultarArbol />
        <Text style={[theme.textos.Label, styles.labels]}>
          {'Consultar'}
        </Text>
      </Pressable>
        <Pressable
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? theme.pressed : theme.offPressed,
                },
                styles.modal,
            ]}
            onPress={() => {
                props.setOption('Ingresar');
            }}>
            <ConsultarArbol />
            <Text style={[theme.textos.Label, styles.labels]}>
                {'Ingresar'}
            </Text>
        </Pressable>
    </Animated.View>
  );
};
