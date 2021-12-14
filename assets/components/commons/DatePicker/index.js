import React, {useEffect, useState} from 'react';
import {Modal, Pressable, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './styles';
import {theme} from '../../../core/theme';

const CalendarComponent = ({
  dateValue = [],
  calendarVisible = false,
  onDatePress,
  onCalendarClose,
  maxDate = null,
}) => {
  const [date, setDate] = useState(dateValue);
  const [actual, setActual] = useState(null);

  useEffect(() => {
    const fecha = new Date();
    const ano = fecha.getFullYear();
    const day = fecha.getDate();
    let mes = fecha.getMonth();
    setActual(`${ano}-${mes}-${day}`);
  }, []);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={calendarVisible}
      onRequestClose={() => onCalendarClose()}>
      <Pressable onPress={() => onCalendarClose()} style={styles.modal}>
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
              textDayFontSize: responsiveFontSize(1.7),
              textMonthFontSize: responsiveFontSize(1.7),
              textDayHeaderFontSize: responsiveFontSize(1.7),
              backgroundColor: '#ffffff',
              arrowColor: theme.colors.primary,
            }}
            maxDate={new Date()}
            firstDay={1}
            onDayPress={newDate => {
              setDate(newDate?.dateString);
              onDatePress(newDate);
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
      </Pressable>
    </Modal>
  );
};

export default CalendarComponent;
