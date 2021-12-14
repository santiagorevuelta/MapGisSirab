import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
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
    width: responsiveScreenWidth(29),
    height: responsiveScreenHeight(10),
    borderRadius: theme.radius,
    marginRight: 5,
    marginBottom: '3%',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 100,
    height: responsiveScreenWidth(7),
    width: responsiveScreenWidth(7),
    backgroundColor: theme.colors.blanco,
  },
  slide: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: 'auto',
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
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(10),
    flexDirection: 'row',
    borderWidth: 0, //theme.colors.border,
  },
  option: {
    borderRadius: theme.radius,
    borderWidth: 0,
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.colors.primary,
  },
});
