import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../../commons/TextInputForm';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({}) => {
  const [dataVariables, setDataVariables] = useState({});

  useEffect(() => {
    const init = async () => {
      let data = await AsyncStorage.getItem('variables');
      data = data === null ? {} : JSON.parse(data);
      setDataVariables(data);
    };
    init().then();
  }, []);

  const setData = (name, text) => {
    let data = {...dataVariables, [name]: text};
    setDataVariables(data);
    AsyncStorage.setItem('variables', JSON.stringify(data));
  };

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: theme.colors.blanco,
        padding: 0,
        margin: 0,
      }}>
      <View style={styles.form}>
        <TextInputForm
          label={'Altura de árbol (m) *'}
          placeholder={'Altura'}
          value={dataVariables.altura}
          keyboardType="numeric"
          onChangeTextInput={text => setData('altura', text)}
        />
        <TextInputForm
          label={'Altura copa (m) *'}
          placeholder={'Altura copa'}
          value={dataVariables.altura_copa}
          keyboardType="numeric"
          onChangeTextInput={text => setData('altura_copa', text)}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm) *'}
          placeholder={'DAP1'}
          value={dataVariables.dap1}
          keyboardType="numeric"
          onChangeTextInput={text => setData('dap1', text)}
        />
        <TextInputForm
          label={'DAP2 (cm) *'}
          placeholder={'DAP2'}
          value={dataVariables.dap2}
          keyboardType="numeric"
          onChangeTextInput={text => setData('dap2', text)}
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso *'}
          placeholder={'dd/mm/aaaa'}
          value={dataVariables.fecha_ingreso}
          onSelectDate={text => setData('fecha_ingreso', text)}
        />
      </View>
    </View>
  );
};
