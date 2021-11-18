import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from '../css/home/ModalOptionsTypeCss';
import {theme} from '../../core/theme';
import Animated from 'react-native-reanimated';
import config from '../../tsconfig.json';
import Header from '../home/HeaderModal';
import Arbol from '../icons/Arbol';
import Zona from '../icons/Zonas';
import Intervencion from '../icons/Intervencion';

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
              props.setOption(item.label);
            }}>
            {IconRender(item.icon)}
            <Text style={[theme.textos.Label, styles.labels]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </Animated.View>
    </>
  );
};

const IconRender = i => {
  if (i === 'arbol') {
    return <Arbol />;
  }
  if (i === 'intervencion') {
    return <Intervencion />;
  }
  if (i === 'zonas') {
    return <Zona />;
  }
};
