import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '@gorhom/bottom-sheet';

const ModalConsulta = props => {
  // hooks
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderHeader = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.colors.blanco,
        paddingLeft: responsiveWidth(5),
      }}>
      <View>
        <Pressable
          style={styles.regress}
          onPress={function () {
            props.setConsultaArbol({value: false});
          }}>
          <IconAntDesign
            name={'back'}
            color={theme.colors.headers}
            style={{top: 2}}
            size={responsiveFontSize(2)}
          />
          <Text style={[theme.textos.Label, styles.regressTxt]}>
            {'Regresar'}
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={[theme.textos.Label, styles.regressHead]}>
          {'Consultar arbol'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.snap}>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnapIndex={1}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}>
        <View style={{flex: 1}}>
          {renderHeader()}
          <Text>pepe</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ModalConsulta;

const styles = StyleSheet.create({
  snap: {
    flex: 1,
    maxHeight: 1,
    zIndex: 2,
  },
  regress: {
    width: responsiveWidth(30),
    zIndex: 3,
  },
  regressTxt: {
    color: theme.colors.headers,
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'normal',
    fontStyle: 'italic',
    position: 'absolute',
    textDecorationLine: 'underline',
    top: responsiveWidth(1),
    paddingLeft: responsiveWidth(5),
    zIndex: 3,
  },
  regressHead: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
});
