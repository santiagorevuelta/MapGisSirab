import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../../commons/TextInputForm';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({}) => {
  const [vataVariables, setVataVariables] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let data = await AsyncStorage.getItem('variables');
    data = data === null ? {} : JSON.parse(data);
    setVataVariables(data);
  }, []);

  const setData = (name, text) => {
    let data = {...vataVariables, [name]: text};
    setVataVariables(data);
    AsyncStorage.setItem('variables', JSON.stringify(data));
  };

  return (
    <View style={{height: '100%', backgroundColor: theme.colors.blanco}}>
      <View style={styles.form}>
        <TextInputForm
          label={'Altura de árbol (m) *'}
          placeholder={'Altura'}
          value={vataVariables.altura}
          keyboardType="numeric"
          onChangeTextInput={text => setData('altura', text)}
        />
        <TextInputForm
          label={'Altura copa (m) *'}
          placeholder={'Altura copa'}
          value={vataVariables.altura_copa}
          keyboardType="numeric"
          onChangeTextInput={text => setData('altura_copa', text)}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm) *'}
          placeholder={'DAP1'}
          value={vataVariables.dap1}
          keyboardType="numeric"
          onChangeTextInput={text => setData('dap1', text)}
        />
        <TextInputForm
          label={'DAP2 (cm) *'}
          placeholder={'DAP2'}
          value={vataVariables.dap2}
          keyboardType="numeric"
          onChangeTextInput={text => setData('dap2', text)}
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso *'}
          placeholder={'dd/mm/aaaa'}
          value={vataVariables.fecha_ingreso}
          onSelectDate={text => setData('fecha_ingreso', text)}
        />
      </View>
    </View>
  );
};
