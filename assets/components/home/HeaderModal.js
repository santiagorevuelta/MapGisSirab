import React, {useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Header = props => {
  return (
    <View style={styles.contend}>
      <View>
        <Pressable
          style={styles.regress}
          onPress={() => {
            console.log(props.backIndex)
            props.setOption(props.backIndex);
          }}>
          <IconAntDesign
            name={'back'}
            color={theme.colors.headers}
            size={responsiveFontSize(2)}
          />
          <Text style={[theme.textos.Label, styles.regressTxt]}>
            {'Regresar'}
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={[theme.textos.Label, styles.regressHead]}>
          {props.type}
        </Text>
      </View>
      <View>
        <Text style={[theme.textos.Label, styles.regressHead]}>
          {'                        '}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contend: {
    flexDirection: 'row',
    height: responsiveHeight(3),
    paddingLeft: responsiveWidth(5),
    alignItems: 'baseline',
    justifyContent:"space-between"
  },
  regress: {
    flexDirection: "row",
    alignItems: 'center',
  },
  regressTxt: {
    color: theme.colors.headers,
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'normal',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginLeft: 5,
    elevation: 5,
  },
  regressHead: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
  },
});
