import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../core/theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ModalAlert from '../Alerta';

const Header = ({type, setOption, backIndex}) => {
  const [visible, setVisible] = useState(false);
  const [title] = useState('Anuncio!');
  const [msg] = useState('¿Esta seguro de cancelar el ingreso?');
  const [buttons] = useState([
    {
      text: 'Cancelar',
      onPress: () => {
        setVisible(false);
      },
    },
    {
      text: 'Aceptar',
      onPress: () => {
        setOption(backIndex);
        setVisible(false);
      },
    },
  ]);

  const validBack = () => {
    if (backIndex === 'Ingresar') {
      setVisible(true);
    } else {
      setOption(backIndex);
    }
  };

  return (
    <View style={styles.contend}>
      <ModalAlert
        modalVisible={visible}
        onModalVisible={setVisible}
        title={title}
        msg={msg}
        buttons={buttons}
      />
      <View>
        <Pressable
          style={styles.regress}
          onPress={() => {
            validBack();
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
        <Text style={[theme.textos.Label, styles.headerText]}>{type}</Text>
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
    justifyContent: 'space-between',
  },
  regress: {
    flexDirection: 'row',
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
    color: theme.colors.headers,
    fontSize: responsiveFontSize(2),
  },
  headerText: {
    textAlign: 'center',
    color: theme.colors.headers,
    fontSize: responsiveFontSize(2),
  },
});
