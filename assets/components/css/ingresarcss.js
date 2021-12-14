const {theme} = require('../../core/theme');
const {
  responsiveWidth,
  responsiveHeight,
} = require('react-native-responsive-dimensions');
const {StyleSheet} = require('react-native');

module.exports = StyleSheet.create({
  body: {
    paddingHorizontal: '3%',
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
  geoArbol: {
    width: responsiveWidth(50),
    marginTop: '7%',
    paddingHorizontal: '2%',
  },
  geo: {
    height: responsiveHeight(4),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    paddingBottom: 0,
  },
  geoConsult: {
    width: responsiveWidth(45),
    height: responsiveHeight(theme.altoCampos),
    justifyContent: 'flex-end',
    marginTop: '7%',
  },
  geoButons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  geoButon: {
    borderWidth: 1,
    borderRadius: theme.radius,
  },
});
