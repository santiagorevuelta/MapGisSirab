import {Dimensions, Platform, StyleSheet} from 'react-native';
import {responsiveFontSize,responsiveWidth,responsiveHeight} from 'react-native-responsive-dimensions';
const {width, height} = Dimensions.get('window');
import {theme} from '../../../core/theme';
const fontSizeText = responsiveFontSize(1.6);
const fontSizeTitle = responsiveFontSize(1.5);
const inputAlto = 40;

module.exports = {
  container: {
    width: '100%',
    height: responsiveHeight(theme.altoCampos),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: "2%",
  },
  input:{
    height: responsiveHeight(theme.altoCampos),
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 50,
    paddingLeft: 10,
  },
  containerStyle: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#B7B7B7',
    marginBottom: 50,
  },
  inputContainerStyle: {
    borderWidth: 0,
    height: responsiveHeight(theme.altoCampos),
    borderRadius: 5,
  },
  listStyle: {
    margin: 0,
    overflow: 'scroll',
    borderColor: '#B7B7B7',
    maxHeight: 200,
    borderWidth: 1,
    zIndex: 8,
    borderRadius: 1,
    opacity: 10,
  },
  SearchBoxTouch: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    paddingTop: 2,
    fontSize: fontSizeText,
    zIndex: 9,
  },
  SearchBoxTextItem: {
    margin: 3,
    fontSize: fontSizeTitle,
    marginLeft: 20,
    right: 2,
    width: '90%',
  },
};
