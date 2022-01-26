import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../../commons/TextInputForm';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asignar, consultar} from '../../../../helpers/dataSave';
import initialjson from '../../../../initialjson.json';

export default ({alto = '100%'}) => {
  const [dataVariables, setDataVarVariables] = useState({});

  function setDataVar(dataInfo) {
    asignar(dataInfo).then();
    setDataVarVariables(dataInfo);
  }

  useEffect(() => {
    asignar(dataVariables).then();
  }, [dataVariables]);

  return (
    <View
      style={{
        backgroundColor: theme.colors.blanco,
        padding: 0,
        height: alto,
        margin: 0,
      }}>
      <View style={styles.form}>
        <TextInputForm
          label={'Altura de árbol (m) *'}
          placeholder={'Altura'}
          value={dataVariables.altura}
          keyboardType="numeric"
          onChangeTextInput={text =>
            setDataVar({...dataVariables, altura: text})
          }
        />
        <TextInputForm
          label={'Altura copa (m) *'}
          placeholder={'Altura copa'}
          value={dataVariables.altura_copa}
          keyboardType="numeric"
          onChangeTextInput={text =>
            setDataVar({...dataVariables, altura_copa: text})
          }
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm) *'}
          placeholder={'DAP1'}
          value={dataVariables.dap1}
          keyboardType="numeric"
          onChangeTextInput={text => setDataVar({...dataVariables, dap1: text})}
        />
        <TextInputForm
          label={'DAP2 (cm) *'}
          placeholder={'DAP2'}
          value={dataVariables.dap2}
          keyboardType="numeric"
          onChangeTextInput={text => setDataVar({...dataVariables, dap2: text})}
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso *'}
          placeholder={'dd/mm/aaaa'}
          value={dataVariables.fecha_ingreso}
          onSelectDate={text =>
            setDataVar({...dataVariables, fecha_ingreso: text})
          }
        />
      </View>
    </View>
  );
};
