const {theme} = require('../../core/theme');
const {
  responsiveWidth,
  responsiveHeight,
  responsiveScreenHeight,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
  body: {
    paddingHorizontal: '5%',
  },
  container: {
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flexDirection: 'column',
  },
  form: {
    flexDirection: 'row',
  },
  formSelect: {
    zIndex: 10,
  },
  guardar: {
    borderRadius: theme.radius + 20,
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  geo: {
    height: responsiveHeight(4),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  geoConsult: {
    width: responsiveWidth(45),
    height: responsiveHeight(theme.altoCampos),
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    marginVertical: responsiveWidth(3),
  },
  geoButons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  geoButon: {
    borderWidth: 1,
    borderRadius: theme.radius,
    borderColor: theme.colors.primary,
  },
});
