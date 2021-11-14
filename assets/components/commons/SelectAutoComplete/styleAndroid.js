const {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
} = require('react-native-responsive-dimensions');
const {theme} = require('../../../core/theme');
module.exports = {
  container: {
    width: '100%',
    height: responsiveHeight(theme.altoCampos),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
  },
  input: {
    height: responsiveHeight(theme.altoCampos),
    borderColor: theme.colors.border,
    borderRadius: 50,
    paddingLeft: 10,
    backgroundColor: 'red',
  },
  containerStyle: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
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
    width: '100%',
    elevation: 8,
    borderRadius: 18,
  },
  listStyle: {
    borderWidth: 0,
    elevation: 10,
    overflow: 'scroll',
    maxHeight: responsiveScreenHeight(50),
  },
  SearchBoxTouch: {
    borderBottomWidth: 1,
    borderColor: '#B7B7B7',
    justifyContent: 'center',
    paddingTop: 2,
  },
  SearchBoxTextItem: {
    margin: 5,
    marginLeft: 10,
    textAlign: 'left',
  },
};
