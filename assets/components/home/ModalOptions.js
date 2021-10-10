import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';

import IngresarArbol from '../icons/IngresarArbol';
import ConsultarArbol from '../icons/ConsultarArbol';

const ModalOptions = props => {
  // hooks
  const bottomSheetRef = React.createRef(<BottomSheet />);

  // variables
  const snapPoints = useMemo(() => ['5%', '35%'], []);

  return (
    <Animated.View style={styles.snap}>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnapIndex={1}
        snapPoints={snapPoints}>
        <View style={styles.header}>
          <Text style={[theme.textos.Label, styles.headerText]}>
            {'Escoja una opción'}
          </Text>
        </View>
        {options(props)}
      </BottomSheet>
    </Animated.View>
  );
};

function options(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.modal}
        onPress={function () {
          props.setConsultaArbol({value: true});
        }}>
        <ConsultarArbol />
        <Text style={[theme.textos.Label, styles.labels]}>
          {'Consultar árbol'}
        </Text>
      </Pressable>
      <Pressable style={styles.modal}>
        <IngresarArbol />
        <Text style={[theme.textos.Label, styles.labels]}>
          {'Ingresar árbol'}
        </Text>
      </Pressable>
    </View>
  );
}

export default ModalOptions;

const styles = StyleSheet.create({
  snap: {
    flex: 1,
    maxHeight: 1,
  },
  container: {
    zIndex: 1,
    backgroundColor: '#fff',
    color: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
  },
  modal: {
    width: responsiveWidth(40),
    height: responsiveWidth(38),
    padding: 15,
    marginTop: 0,
    margin: 15,
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
    elevation: 3,
  },
  labels: {
    paddingTop: responsiveHeight(1),
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(51,51,51,0.73)',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 5,
  },
  headerText: {
    textAlign: 'center',
    color: theme.colors.headers,
    marginTop: 2,
  },
});
