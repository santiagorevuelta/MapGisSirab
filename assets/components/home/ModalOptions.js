import React from 'react';
import {Text, Pressable, View} from 'react-native';
import styles from '../css/home/ModalOptionsCss';
import {theme} from '../../core/theme';
import Animated from 'react-native-reanimated';

import ConsultarArbol from '../icons/ConsultarArbol';
import IngresarArbol from '../icons/IngresarArbol';

export default props => {
  return (
    <>
      <View style={styles.header}>
        <Text style={[theme.textos.Label, styles.headerText]}>
          {'Escoja una opción'}
        </Text>
      </View>
      <Animated.View style={styles.container}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? theme.pressed : theme.offPressed,
            },
            styles.modal,
          ]}
          onPress={() => {
            props.setOption(true);
          }}>
          <ConsultarArbol />
          <Text style={[theme.textos.Label, styles.labels]}>
            {'Consultar árbol'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.modal}
          onPress={() => {
            //props.tabArbol('EnterTree');
          }}>
          <IngresarArbol />
          <Text style={[theme.textos.Label, styles.labels]}>
            {'Ingresar árbol'}
          </Text>
        </Pressable>
      </Animated.View>
    </>
  );
};
