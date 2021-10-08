import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import FormConsulta from '../Arbol/formConsultaArbol';

const ModalConsulta = props => {
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
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
    </View>
  );

  return (
    //<View style={styles.snap}>
    <BottomSheet
      //style={styles.snap}
      snapPoints={[
        responsiveHeight(80),
        responsiveHeight(5),
        responsiveHeight(40),
      ]}
      ref={bs}
      initialSnap={0}
      renderContent={FormConsulta}
      enabledBottomClamp={true}
      renderHeader={renderHeader}
      callbackNode={fall}
      enabledGestureInteraction={true}
    />
    // </View>
  );
};

export default ModalConsulta;

const styles = StyleSheet.create({
  snap: {
    flex: 1,
    maxHeight: 1,
  },
  regress: {
    width: responsiveWidth(30),
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
  },
  regressHead: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: 'rgb(51,51,51)',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
