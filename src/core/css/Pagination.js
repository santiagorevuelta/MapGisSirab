const {theme} = require('../../core/theme');
const {
  responsiveScreenFontSize,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  divpagination: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
  },
  btnpagination: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  numberpage: {
    fontSize: responsiveScreenFontSize(2),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 3,
    marginRight: 3,
    width: 30,
    padding: 0,
    margin: 0,
  },
  pageactive: {
    color: theme.colors.blanco,
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
  },
  style: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
  },
  contentStyle: {},
  labelStyle: {
    fontSize: responsiveScreenFontSize(3),
  },
});

module.exports = styles;
