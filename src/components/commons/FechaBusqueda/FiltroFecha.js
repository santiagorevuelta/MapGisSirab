import styles from '../../css/ingresarcss';
import DatePicker from '../DatePicker/DatePicker';
import {View} from 'react-native';
import React from 'react';

const FiltroFecha = ({filters, setFilters}) => {
  return (
    <View style={[styles.form, {zIndex: -1}]}>
      <DatePicker
        label={'Fecha inicial'}
        placeholder={'Fecha inicial'}
        value={filters.fecha?.split('-')[0]}
        keyboardType="default"
        onSelectDate={text => {
          let fecha = filters.fecha?.split('-');
          if (fecha?.length === 1) {
            fecha = `${text}-${fecha[1] === undefined ? '' : fecha[1]}`;
          } else {
            fecha = `${text}-`;
          }
          setFilters({...filters, fecha: fecha});
        }}
      />
      <DatePicker
        label={'Fecha final'}
        placeholder={'Fecha final'}
        value={filters.fecha?.split('-')[1]}
        keyboardType="default"
        onSelectDate={text => {
          let fecha = filters.fecha?.split('-');
          if (fecha.length > 0) {
            fecha = `${fecha[0]}-${text}`;
          } else {
            fecha = `-${text}`;
          }
          setFilters({...filters, fecha: fecha});
        }}
      />
    </View>
  );
};
export default FiltroFecha;
