import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {theme} from '../../core/theme';

module.exports = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  pressable: {
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: responsiveWidth(4),
  },
  imageVer: {
    zIndex: 2,
  },
  imageNoVer: {
    zIndex: 2,
  },
  image: {
    right: 15,
    zIndex: 2,
    top: '25%',
    position: 'absolute',
  },
  input: {
    fontFamily: 'Roboto',
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#C4C4C4',
    marginVertical: 2,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  focusOn: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.focus,
  },
});
