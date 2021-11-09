import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { theme } from "../../../core/theme";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    height: responsiveHeight(100),
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: responsiveWidth(5),
    margin: responsiveWidth(5),
    marginTop: responsiveWidth(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: theme.radius,
  },

  buttonClose: {
    alignItems: "flex-end",
  },

});
