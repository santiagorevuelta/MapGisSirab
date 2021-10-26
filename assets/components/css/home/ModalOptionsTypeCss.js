const {theme} = require('../../../core/theme');
const {
  responsiveWidth,
  responsiveHeight,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
  },
  modal: {
    width: responsiveWidth(30),
    height: responsiveWidth(25),
    padding: 15,
    marginTop: 0,
    margin: 5,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.blanco,
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
});

module.exports = styles;
