import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import IngresarArbol from '../icons/IngresarArbol';
import ConsultarArbol from '../icons/ConsultarArbol';
const ModalOptions = props => {
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  const x = () => (
    <View style={styles.container}>
      <Pressable
        style={styles.modal}
        onPress={function () {
          props.setConsultaArbol({value: true});
        }}>
        <ConsultarArbol />
        <Text style={theme.textos.Label}>{'Consultar árbol'}</Text>
      </Pressable>
      <Pressable style={styles.modal}>
        <IngresarArbol />
        <Text style={theme.textos.Label}>{'Ingresar árbol'}</Text>
      </Pressable>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
      <Text style={[theme.textos.Label, styles.headerText]}>
        {'Escoja una opción'}
      </Text>
    </View>
  );

  return (
    <View style={styles.snap}>
      <BottomSheet
        snapPoints={[280, 30, 100]}
        ref={bs}
        initialSnap={0}
        renderContent={x}
        enabledBottomClamp={true}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </View>
  );
};

export default ModalOptions;

const styles = StyleSheet.create({
  snap: {
    flex: 1,
    maxHeight: 1,
  },
  container: {
    fontSize: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    color: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
    paddingVertical: responsiveHeight(14),
    paddingBottom: responsiveHeight(15),
  },
  modal: {
    width: responsiveWidth(45),
    height: responsiveWidth(38),
    padding: 15,
    margin: 5,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(51,51,51,0.73)',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    textAlign: 'center',
    color: theme.colors.headers,
    marginTop: 10,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    opacity: 0.3,
    width: 80,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
  },
});
