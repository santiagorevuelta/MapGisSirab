import {StyleSheet} from 'react-native';
import {theme} from '../../core/theme';

module.exports = StyleSheet.create({
  container: {
    width: '100%',
    height: '5%',
    marginVertical: 10,
  },
  pressable: {
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '4%',
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
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#C4C4C4',
    marginVertical: 2,
    overflow: 'hidden',
    color: theme.colors.text,
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 0,
    height: '100%',
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
