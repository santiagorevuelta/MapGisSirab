import React from 'react';
import {Modal, View, StyleSheet, Image} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Renderload = ({load = false, setLoadVisible = () => {}}) => {
  return (
    <Modal
      transparent={true}
      visible={load}
      onRequestClose={() => {
        setLoadVisible(false);
      }}>
      <View style={stylesLoad.contented}>
        <Image
          style={stylesLoad.loadGif}
          source={require('../assets/Infinity.gif')}
        />
      </View>
    </Modal>
  );
};

export default Renderload;

const stylesLoad = StyleSheet.create({
  contented: {
    flex: 1,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: 'rgba(255,255,255,0.47)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadGif: {
    resizeMode: 'center',
  },
});
