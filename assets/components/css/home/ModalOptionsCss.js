const {theme} = require('../../../core/theme');
const {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    color: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
  },
  modal: {
    width: responsiveWidth(33),
    height: responsiveWidth(28),
    padding: 15,
    marginTop: 0,
    margin: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    //backgroundColor: theme.colors.blanco,
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    zIndex: 10,
  },
  labels: {
    paddingTop: responsiveHeight(1),
  },
  header: {
    shadowColor: 'rgba(51,51,51,0.73)',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  headerText: {
    textAlign: 'center',
    color: theme.colors.headers,
    fontSize: responsiveFontSize(2),
  },
});

module.exports = styles;
