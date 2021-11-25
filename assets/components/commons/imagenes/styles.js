import {StyleSheet} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: theme.colors.blanco,
    paddingTop: '2%',
    marginBottom: '5%',
  },
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    height: responsiveScreenWidth(40),
    width: responsiveScreenWidth(43),
    borderRadius: theme.radius,
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 100,
    height: responsiveScreenWidth(8),
    width: responsiveScreenWidth(8),
    backgroundColor: theme.colors.border,
  },
  slide: {
    flexDirection: 'row',
    paddingTop: 3,
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
    justifyContent: 'space-evenly',
    textAlign: 'center',
    flexDirection: 'column',
    borderWidth: 0,
    backgroundColor: 'transparent', //theme.colors.border,
  },
  option: {
    borderRadius: theme.radius + 50,
  },
});
