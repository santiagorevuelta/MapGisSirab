const {theme} = require('../../../assets/core/theme');
const {
  responsiveWidth,
  responsiveHeight,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  divpagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 5,
  },
  btnpagination: {
    width: 14,
    height: 16,
    flex: 1,
    backgroundColor: 'transparent',
  },
  numberpage: {
    fontSize: 11,
    marginLeft: 3,
    marginRight: 3,
  },
  pageactive: {
    color: theme.colors.blanco,
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    borderRadius: 50,
    fontSize: 10,
    marginLeft: 3,
    marginRight: 3,
  },
});

module.exports = styles;
