import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
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
    padding: 20,
    marginHorizontal: 2,
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
    right: 5,
    height: 40,
    width: 40,
  },
  slider: {},
  guardar: {
    borderRadius: theme.radius + 20,
    marginTop: '-10%',
    width: responsiveScreenWidth(40),
  },
});
