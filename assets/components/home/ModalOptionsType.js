import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from '../css/home/ModalOptionsTypeCss';
import {theme} from '../../core/theme';
import Animated from 'react-native-reanimated';
import config from '../../tsconfig.json';
import ConsultarArbol from '../icons/ConsultarArbol';
import Header from '../home/HeaderModal';

export default props => {
  return (
    <>
      <Header
        backIndex={'inicio'}
        type={props.type}
        setOption={props.setOption}
      />
      <Animated.View style={styles.container}>
        {config.home.map((item, i) => (
          <Pressable
            key={i}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? theme.pressed : theme.offPressed,
              },
              styles.modal,
            ]}
            onPress={() => {
              props.setOption('');
            }}>
            <ConsultarArbol />
            <Text style={[theme.textos.Label, styles.labels]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </Animated.View>
    </>
  );
};
