const {theme} = require('../../core/theme');
const {
  responsiveWidth,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: theme.radius,
    marginBottom: 10,
    borderColor: theme.colors.border,
    color: theme.colors.secondary,
    flexDirection: 'column',
    width: responsiveScreenWidth(50),
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.5),
  },
  tipo: {
    fontSize: responsiveFontSize(1.3),
    textAlign: 'center',
  },
  image: {
    borderRadius: theme.radius,
    height: responsiveWidth(20),
  },
  date: {
    fontSize: responsiveFontSize(1.3),
    textAlign: 'left',
  },
  buttons: {
    marginLeft: 2,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  labelStyle: {
    fontSize: responsiveFontSize(3.5),
    fontStyle: 'italic',
  },
  contentFooter: {
    justifyContent: 'space-between',
  },
});
