import React from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../../commons/TextInputForm';
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
          keyboardType="numeric"
          onChangeTextInput={text => setDataVar({...dataVar, altura: text})}
        />
        <TextInputForm
          label={'Altura copa (m)'}
          placeholder={'Altura copa'}
          value={dataVar.altura_copa}
          keyboardType="numeric"
          onChangeTextInput={text =>
            setDataVar({...dataVar, altura_copa: text})
          }
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm)'}
          placeholder={'DAP1'}
          value={dataVar.dap1}
          keyboardType="numeric"
          onChangeTextInput={text => setDataVar({...dataVar, dap1: text})}
        />
        <TextInputForm
          label={'DAP2 (cm)'}
          placeholder={'DAP2'}
          value={dataVar.dap2}
          keyboardType="numeric"
          onChangeTextInput={text => setDataVar({...dataVar, dap2: text})}
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso'}
          placeholder={'dd/mm/aaaa'}
          value={dataVar.fecha_ingreso}
          onChangeTextInput={text =>
            setDataVar({...dataVar, fecha_ingreso: text})
          }
          onSelectDate={text => setDataVar({...dataVar, fecha_ingreso: text})}
        />
      </View>
    </View>
  );
};
