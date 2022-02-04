import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import TextInputForm from '../../../commons/TextInputForm';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';
import {asignar} from '../../../../helpers/dataSave';
import VariableContext from '../../../../../Context/variables/VariableContext';
import {UPDATE_VARIABLES} from '../../../../../Context/Types';

export default ({alto = '100%', navigation}) => {
  //context
  const {variables, updateVariables} = useContext(VariableContext);

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
          value={variables?.altura}
          keyboardType="numeric"
          onChangeTextInput={text => {
            updateVariables({...variables, altura: text}, UPDATE_VARIABLES);
          }}
        />
        <TextInputForm
          label={'Altura copa (m) *'}
          placeholder={'Altura copa'}
          value={variables?.altura_copa}
          keyboardType="numeric"
          onChangeTextInput={text =>
            updateVariables({...variables, altura_copa: text}, UPDATE_VARIABLES)
          }
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'DAP1 (cm) *'}
          placeholder={'DAP1'}
          value={variables?.dap1}
          keyboardType="numeric"
          onChangeTextInput={text =>
            updateVariables({...variables, dap1: text}, UPDATE_VARIABLES)
          }
        />
        <TextInputForm
          label={'DAP2 (cm) *'}
          placeholder={'DAP2'}
          value={variables?.dap2}
          keyboardType="numeric"
          onChangeTextInput={text =>
            updateVariables({...variables, dap2: text}, UPDATE_VARIABLES)
          }
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha ingreso *'}
          placeholder={'dd/mm/aaaa'}
          value={variables?.fecha_ingreso}
          onSelectDate={text =>
            updateVariables(
              {...variables, fecha_ingreso: text},
              UPDATE_VARIABLES,
            )
          }
        />
      </View>
    </View>
  );
};
