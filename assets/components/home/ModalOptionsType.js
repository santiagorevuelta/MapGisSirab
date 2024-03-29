import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from '../css/home/ModalOptionsTypeCss';
import {theme} from '../../core/theme';
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
      <View style={[styles.container, {flex: 1, marginTop: '5%'}]}>
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
      </View>
    </>
  );
};

const IconRender = i => {
  if (i === 'arbol') {
    return <Arbol />;
  } else if (i === 'intervencion') {
    return <Intervencion />;
  } else if (i === 'zonas') {
    return <Zona />;
  }
};
