import React from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../TextInputForm';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';

export default ({dataVar, setDataVar}) => {
  return (
    <View style={{height: '100%', backgroundColor: theme.colors.blanco}}>
      <View style={styles.form}>
        <TextInputForm
          label={'Altura de árbol (m)'}
          placeholder={'Altura'}
          value={dataVar.altura}
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={text => setDataVar({...dataVar, altura: text})}
        />
        <TextInputForm
          label={'Altura copa (m)'}
          placeholder={'Altura copa'}
          value={dataVar.altura_copa}
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={text => setDataVar({...dataVar, altura_copa: text})}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm)'}
          placeholder={'DAP1'}
          returnKeyType="next"
          value={dataVar.dap1}
          autoCapitalize="none"
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={text => setDataVar({...dataVar, dap1: text})}
        />
        <TextInputForm
          label={'DAP2 (cm)'}
          placeholder={'DAP2'}
          returnKeyType="next"
          value={dataVar.dap2}
          autoCapitalize="none"
          textContentType="numeric"
          keyboardType="numeric"
          onChangeText={text => setDataVar({...dataVar, dap2: text})}
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso'}
          placeholder={'dd/mm/aaaa'}
          value={dataVar.fecha_ingreso}
          keyboardType="default"
          onChangeText={text => setDataVar({...dataVar, fecha_ingreso: text})}
          onSelectDate={text => setDataVar({...dataVar, fecha_ingreso: text})}
        />
      </View>
    </View>
  );
};
