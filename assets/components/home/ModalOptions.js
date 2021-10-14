import React, {useCallback, useMemo, useRef, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import styles from '../css/home/ModalOptionsCss';
import {theme} from '../../core/theme';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';

import IngresarArbol from '../icons/IngresarArbol';
import ConsultarArbol from '../icons/ConsultarArbol';

export default props => {
  // hooks
  const bottomSheetRef = React.createRef();

  // variables
  const snapPoints = useMemo(() => ['31%'], []); //['5%','35%']
  return (
    <View style={styles.snap}>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnapIndex={0}
        shouldMeasureContentHeight={false}
        snapPoints={snapPoints}>
        <BottomSheetScrollView>
          <View style={styles.header}>
            <Text style={[theme.textos.Label, styles.headerText]}>
              {'Escoja una opción'}
            </Text>
          </View>
          <View style={styles.container}>
            <Pressable
              style={styles.modal}
              onPress={() => {
                console.log('Consultar árbol');
                props.setConsultaArbol({value: true});
              }}>
              <ConsultarArbol />
              <Text style={[theme.textos.Label, styles.labels]}>
                {'Consultar árbol'}
              </Text>
            </Pressable>
            <Pressable
              style={styles.modal}
              onPress={() => {
                console.log('Ingresar árbol');
                props.tabArbol('EnterTree');
              }}>
              <IngresarArbol />
              <Text style={[theme.textos.Label, styles.labels]}>
                {'Ingresar árbol'}
              </Text>
            </Pressable>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};
