import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fotoModal: {
    resizeMode: 'contain',
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  closeModal: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: 0,
  },
  closeButton: {
    backgroundColor: theme.colors.blanco,
    elevation: 10,
    borderWidth: 0,
    borderRadius: 50,
    height: 40,
    width: 40,
    right: '-2%',
    top: '0%',
  },
  row: {
    flexDirection: 'row',
  },
  div: {
    width: '50%',
    justifyContent: 'flex-start',
  },
  slider: {
    height: responsiveHeight(40),
    margin: 0,
    padding: 0,
    borderRadius: 5,
  },
});
