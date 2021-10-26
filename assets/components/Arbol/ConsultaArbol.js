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
import buscarArbol from '../../helpers/buscarArbol';
import {notifyMessage} from '../../core/general';
import {verTodoEnMapa} from '../map/BackgroundMap';

const ModalConsult = ({...props}) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState([]);

  const fnBuscar = async (obj, filtros = {}) => {
    if (obj) {
      let response = await buscarArbol(filtros);
      if (response.length === 0) {
        notifyMessage('La consulta no obtuvo resultados');
        return;
      }
      setDataResult(response.data);
      verTodoEnMapa(response.data);
    }
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
            {'Consultar árbol'}
          </Text>
        </View>
      </View>
      <FormConsultaArbol fnBuscar={fnBuscar} />
      {buscar ? (
        <ResultSearch tabArbol={props.tabArbol} data={dataResult} />
      ) : null}
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
