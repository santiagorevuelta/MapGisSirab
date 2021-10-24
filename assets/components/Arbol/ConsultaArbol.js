import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FormConsultaArbol from './FormConsultaArbol';
import ResultSearch from './ResultSearch';

const ModalConsult = ({...props}) => {
  const [buscar, setBuscar] = useState(false);

  const fnBuscar = obj => {
    setBuscar(obj);
  };

  return (
    <>
      <View style={styles.contend}>
        <View>
          <Pressable
            style={styles.regress}
            onPress={() => {
              props.setOption(false);
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
      <FormConsultaArbol fnBuscar={fnBuscar} />
      {buscar ? <ResultSearch tabArbol={props.tabArbol} /> : null}
    </>
  );
};

export default ModalConsult;

const styles = StyleSheet.create({
  contend: {
    flexDirection: 'row',
    height: responsiveHeight(5),
    paddingLeft: responsiveWidth(5),
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
    elevation: 5,
  },
  regressHead: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
});
