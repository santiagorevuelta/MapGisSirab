import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: theme.colors.blanco,
    paddingTop: '5%',
    marginBottom: '5%',
  },
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    height: 150,
    width: 170,
    borderRadius: theme.radius,
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 100,
    height: 30,
    width: 31,
    backgroundColor: theme.colors.blanco,
  },
  slide: {
    flexDirection: 'row',
  },
  fotos: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: theme.radius,
  },
  text: {
    color: theme.colors.secondary,
    fontStyle: 'italic',
  },
  containerAdd: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: '#B5B2B2',
  },
});
