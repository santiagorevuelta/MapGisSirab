import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../core/theme';

export const styles = StyleSheet.create({
  container: {
    height: responsiveScreenHeight(15),
    width: responsiveScreenWidth(80),
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: responsiveWidth(10),
    margin: responsiveWidth(10),
    marginTop: responsiveHeight(40),
    borderRadius: theme.radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex:4
  },
  modal: {
    height: responsiveHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    marginTop: responsiveHeight(40),
    position: 'absolute',
    alignItems: "flex-end",
    elevation: 6,
  },
});
