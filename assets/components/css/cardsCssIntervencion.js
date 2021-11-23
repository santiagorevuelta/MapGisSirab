const {theme} = require('../../core/theme');
const {
  responsiveWidth,
  responsiveScreenFontSize,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
  container: {
    width: responsiveWidth(45),
    height: responsiveWidth(47),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.border,
    paddingBottom: responsiveScreenFontSize(1.2),
    margin: 5,
    marginBottom: 1,
  },
  title: {
    fontSize: responsiveScreenFontSize(1.4),
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textos: {
    fontSize: responsiveScreenFontSize(1.2),
  },
  image: {
    borderRadius: theme.radius,
    height: responsiveWidth(25),
  },
  footer: {},
  operador: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
    fontSize: responsiveScreenFontSize(1.5),
  },
});
