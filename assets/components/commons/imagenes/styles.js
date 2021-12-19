import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  body: {
    height: '100%',
    paddingTop: '2%',
    marginBottom: '5%',
    backgroundColor: theme.colors.blanco,
  },
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    width: responsiveScreenWidth(29),
    height: responsiveScreenWidth(29),
    borderRadius: theme.radius,
    marginRight: 5,
    marginBottom: '3%',
  },
  icon: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: theme.radius,
    backgroundColor: theme.colors.fondo,
    zIndex: 1,
    height: responsiveScreenWidth(29),
    width: responsiveScreenWidth(29),
  },
  slide: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: 'auto',
  },
  cam: {
    alignContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  del: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
    justifyContent: 'space-between',
    paddingTop: 5,
    width: responsiveWidth(90),
    height: responsiveScreenHeight(5),
    flexDirection: 'row',
    borderWidth: 0,
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
