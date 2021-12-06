import {DefaultTheme} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export const theme = {
  dark: false,
  pressed: '#d9d9d9',
  offPressed: '#fff',
  radius: 15,
  roboto: 'roboto',
  altoCampos: 5,
  font: 1.5,
  fontbtn: 1.7,
  colors: {
    ...DefaultTheme.colors,
    dark: {
      backgroundColor: 'black',
      backgroundCard: '#25282c',
      color: 'white',
    },
    light: {
      backgroundColor: 'white',
      backgroundCard: '#fff',
      color: 'black',
    },
    text: '#000000',
    primary: '#258B20',
    secondary: '#414757',
    error: '#f13a59',
    focus: 'rgba(37,139,32,0.15)',
    headers: '#959595',
    border: 'rgba(149,149,149,0.24)',
    blanco: '#fff',
    negro: '#000',
    hover: 'rgb(125,211,122)',
  },
  buttons: {
    principales: {
      height: 25,
      width: 56,
      borderRadius: 23,
      color: '#258B20',
    },
    Secundarios: {
      height: 25,
      width: 56,
      borderRadius: 23,
      color: '#ffffff',
      borderWidth: 1,
      borderColor: '#258B20',
    },
  },
  textos: {
    Label: {
      fontSize: responsiveFontSize(1.5),
      color: '#258B20',
      fontWeight: 'bold',
    },
    LabelIn: {
      fontSize: responsiveFontSize(1.5),
      color: '#258B20',
      fontWeight: 'bold',
    },
    Textos: {
      color: '#959595',
      textAlign: 'center',
      fontSize: responsiveFontSize(1),
    },
    img: {
      fontSize: responsiveScreenFontSize(1.6),
      color: '#fff',
    },
  },
  ver: {
    Label: {
      fontSize: responsiveFontSize(1.7),
      color: '#258B20',
    },
    Textos: {
      fontSize: responsiveFontSize(1.5),
      color: '#959595',
      textAlign: 'left',
    },
  },
  input: {
    height: 25,
    width: 140,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#959595',
  },
};
