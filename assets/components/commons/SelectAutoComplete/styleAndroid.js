const {responsiveHeight} = require('react-native-responsive-dimensions');
const {theme} = require('../../../core/theme');
module.exports = {
  container: {},
  input: {},
  containerStyle: {
    width: '100%',
    height: responsiveHeight(theme.altoCampos),
    borderWidth: 0,
    borderColor: '#B7B7B7',
  },
  inputContainerStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    padding: 2,
    borderWidth: 1,
    borderRadius: 25,
  },
  listContainerStyle: {
    height: '90%',
  },
  listStyle: {
    height: '90%',
    borderWidth: 0,
  },
  SearchBoxTouch: {
    borderColor: '#B7B7B7',
    marginTop: 2,
  },
  SearchBoxTextItem: {
    textAlign: 'left',
  },
};
