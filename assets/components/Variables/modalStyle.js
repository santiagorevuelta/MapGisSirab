import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {theme} from '../../core/theme';

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
  closeModal: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 2,
  },
  closeButton: {
    backgroundColor: theme.colors.blanco,
    borderWidth: 0,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  slider: {
    height: responsiveHeight(40),
  },
  guardar: {
    borderRadius: theme.radius + 20,
    marginTop: 10,
  },
});
