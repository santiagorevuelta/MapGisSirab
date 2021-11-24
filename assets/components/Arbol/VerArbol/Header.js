import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../core/theme';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import React from 'react';

const RenderHeader = props => (
  <View style={stylesHead.head}>
    <Pressable
      style={stylesHead.regress}
      onPress={() => {
        props.nav('Dashboard');
      }}>
      <IconAntDesign
        name={'back'}
        color={theme.colors.headers}
        size={responsiveFontSize(2)}
      />
      <Text style={[theme.textos.Label, stylesHead.regressTxt]}>
        {'Regresar'}
      </Text>
    </Pressable>
    <View style={stylesHead.headCodigo}>
      <Text style={theme.textos.Label}>{'Código ' + props.codigo}</Text>
    </View>
    <View style={stylesHead.headCant}>
      <Text style={[theme.textos.Label, stylesHead.textCant]}>
        {props.index + 1 + ' de ' + props.cantidad}
      </Text>
    </View>
  </View>
);

export default RenderHeader;

const stylesHead = StyleSheet.create({
  head: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? '10%' : 0,
    paddingTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
    width: responsiveWidth(100),
    justifyContent: 'space-between',
  },
  contentRegress: {
    backgroundColor: '#565656',
    borderRadius: 25,
  },
  regress: {
    zIndex: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#565656',
    borderRadius: 25,
    paddingHorizontal: 4,
  },
  regressTxt: {
    color: theme.colors.blanco,
    padding: 3,
    fontSize: responsiveFontSize(1.5),
    textDecorationLine: 'underline',
    fontWeight: 'normal',
    fontStyle: 'italic',
    zIndex: 3,
  },
  headCodigo: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    paddingHorizontal: 4,
    borderRadius: 25,
  },
  headCant: {
    backgroundColor: '#565656',
    paddingHorizontal: 4,
    borderRadius: 25,
  },
  textCant: {
    textAlign: 'center',
    padding: 3,
    color: theme.colors.blanco,
    fontSize: responsiveFontSize(1.5),
  },
});
