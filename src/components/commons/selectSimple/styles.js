import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(45),
    height: responsiveHeight(theme.altoSelect),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
    borderRadius: theme.radius,
    zIndex: -1,
  },
  placeholder: {
    color: '#000',
  },
  value: {
    color: '#000',
  },
  selector: {
    height: '100%',
    marginTop: 1,
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
  },
  containerList: {
    width: responsiveWidth(90),
    maxWidth: '100%',
    minHeight: responsiveHeight(5),
    height: 'auto',
    borderRadius: 10,
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
    borderBottomWidth: 1,
    borderColor: '#CAD6D3',
  },

  containerItemList: {
    padding: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    borderBottomWidth: 1,
    borderColor: '#CAD6D3',
    backgroundColor: theme.colors.blanco,
  },
  textItem: {
    color: '#333333',
  },
  centeredView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
