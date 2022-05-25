import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

const fontSizeText = responsiveFontSize(1.6);
const fontSizeTitle = responsiveFontSize(1.5);

module.exports = {
  containerStyle: {
    width: '100%',
    height: responsiveScreenHeight(theme.altoCampos),
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: theme.colors.border,
    fontSize: responsiveScreenFontSize(theme.font),
  },
  listStyle: {
    width: '100%',
    borderWidth: 0,
  },
  SearchBoxTouch: {
    borderColor: '#B7B7B7',
    marginTop: 2,
  },
  SearchBoxTextItem: {
    textAlign: 'left',
  },
};
