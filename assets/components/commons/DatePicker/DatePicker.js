import CalendarComponent from "./index";
import React from "react";
import { StyleSheet, Text, TextInput as Input, TouchableOpacity, View } from "react-native";
import { theme } from "../../../core/theme";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default props => {
  const [calendarShow, setCalendarShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={theme.textos.LabelIn}>{props.label}</Text>
      <View style={styles.content}>
        <Input
          style={[
            styles.input,
            props.isFocus ? { color: theme.colors.primary } : {},
          ]}
          underlineColorAndroid="transparent"
          {...props}
        />
        <TouchableOpacity
          style={styles.icondate}
          onPress={() => {
            setCalendarShow(!calendarShow);
          }}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={responsiveFontSize(3)}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
      <CalendarComponent
        dateValue={props.value}
        calendarVisible={calendarShow}
        onDatePress={(date) => {
          props.onSelectDate(date?.dateString);
          setCalendarShow(!calendarShow);
        }}
        onCalendarClose={() => {
          setCalendarShow(!calendarShow);
        }} />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(45),
    height: responsiveHeight(theme.altoCampos),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: "2%",
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    height: "auto",
    width: "100%",
    marginTop: 1,
    paddingLeft: 10,
    borderColor: theme.colors.border,
  },
  content: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(43),
  },
  icondate: {
    position: "absolute",
    right: "5%",
  },
});
