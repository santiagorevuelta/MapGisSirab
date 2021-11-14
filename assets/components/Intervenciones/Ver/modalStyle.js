import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
  openButton: {
    top: '1%',
    right: '1%',
    width: 25,
    height: 25,
    position: 'absolute',
    textAlign: 'center',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#08517F',
  },
  textStyle: {
    color: '#08517F',
    top: -8,
    textAlign: 'center',
    fontSize: 22,
  },
  fotoModal: {
    width: width / 2 + 100,
    height: height / 2,
    borderRadius: 5,
  },
  viewCamposBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
