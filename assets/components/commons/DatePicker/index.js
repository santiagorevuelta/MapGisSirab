import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { styles } from "./styles";
import { theme } from "../../../core/theme";

const CalendarComponent = ({
                             dateValue = [],
                             calendarVisible = false,
                             onDatePress,
                             onCalendarClose,
                             maxDate = null,
                           }) => {
  const [date, setDate] = useState(dateValue);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={calendarVisible}
      onRequestClose={() => onCalendarClose()}>
      <TouchableOpacity onPress={() => onCalendarClose()} style={styles.modal}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => onCalendarClose()}>
            <IconAntDesign
              name="closecircleo"
              size={responsiveFontSize(3)}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
          <Calendar
            style={styles.calendar}
            theme={{
              textDayFontFamily: "Mulish-Regular",
              textMonthFontFamily: "Mulish-Regular",
              textDayHeaderFontFamily: "Mulish-Regular",
              textDayFontSize: responsiveFontSize(1.7),
              textMonthFontSize: responsiveFontSize(1.7),
              textDayHeaderFontSize: responsiveFontSize(1.7),
              backgroundColor: "#ffffff",
              arrowColor: theme.colors.primary,
            }}
            // minDate = {Date()}
            maxDate={maxDate}
            onDayPress={date => {
              setDate(date?.dateString);
              onDatePress(date);
            }}
            markedDates={{
              [date]: {
                selected: true,
                marked: true,
                selectedColor: theme.colors.primary,
              },
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CalendarComponent;
