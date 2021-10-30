import {Platform, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../core/theme';
const momserratBold = Platform.OS !== 'ios' ? '' : '';
const momserratI = Platform.OS !== 'ios' ? '' : '';

export const styles = StyleSheet.create({
  container:{
    width: responsiveWidth(45),
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
    borderRadius: theme.radius,
  },
  placeholder: {
    color: '#000',
  },
  value: {
    color: '#000',
  },
  selector: {
    height: '90%',
    marginTop: 5,
    width: responsiveWidth(43),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingHorizontal: responsiveWidth(2),
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 40,
    zIndex: 8,
  },
  containerList: {
    position: 'absolute',
    width: responsiveWidth(44),
    maxWidth: '100%',
    maxHeight: responsiveHeight(40),
    top: '135%',
    zIndex: 10,
    borderRadius: 0,
    backgroundColor: theme.colors.blanco,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderWidth: 0.2,
    borderTopWidth: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    elevation: 10,
  },

  containerItemList: {
    padding: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    borderBottomWidth: 1,
    borderColor: '#CAD6D3',
    backgroundColor: theme.colors.blanco,
    zIndex: 10,
    elevation: 10,
  },
  textItem: {
    color: '#333333',
  },
});
