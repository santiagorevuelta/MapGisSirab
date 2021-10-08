import {DefaultTheme} from 'react-native-paper';
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#258B20',
    secondary: '#414757',
    error: '#f13a59',
    headers: '#959595',
    blanco: '#fff',
    negro: '#000',
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
      fontFamily: 'Roboto',
      fontSize: responsiveFontSize(2.5),
      color: '#258B20',
      fontWeight: 'bold',
    },
    LabelIn: {
      fontFamily: 'Roboto',
      fontSize: responsiveFontSize(2),
      color: '#3F793B',
      paddingLeft: responsiveWidth(3),
    },
    Textos: {
      fontFamily: 'Roboto',
      color: '#959595',
      textAlign: 'center',
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
