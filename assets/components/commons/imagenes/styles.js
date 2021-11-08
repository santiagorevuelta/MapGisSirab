import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  modal: {
    height: responsiveScreenHeight(15),
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: responsiveWidth(10),
    margin: responsiveWidth(10),
    marginTop: responsiveHeight(40),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
