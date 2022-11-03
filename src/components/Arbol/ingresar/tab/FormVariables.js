import React, {useContext} from 'react';
import {View} from 'react-native';
import {theme} from '../../../../core/theme';
import DatePicker from '../../../commons/DatePicker/DatePicker';
import styles from '../../../css/ingresarcss';
import VariableContext from '../../../../../Context/variables/VariableContext';
import {UPDATE_VARIABLES} from '../../../../../Context/Types';
import TextInputVar from './TextInputVar';

export default ({alto = '100%'}) => {
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
        <TextInputVar
          label={'Altura de árbol (m) *'}
          placeholder={'Altura'}
          value={variables?.altura}
          keyboardType="numeric"
          onEndEditingInput={text => {
            updateVariables({...variables, altura: text}, UPDATE_VARIABLES);
          }}
        />
        <TextInputVar
          label={'Altura copa (m) *'}
          placeholder={'Altura copa'}
          value={variables?.altura_copa}
          keyboardType="numeric"
          onEndEditingInput={text =>
            updateVariables({...variables, altura_copa: text}, UPDATE_VARIABLES)
          }
        />
      </View>
      <View style={styles.form}>
        <TextInputVar
          label={'DAP1 (cm) *'}
          placeholder={'DAP1'}
          value={variables?.dap1}
          keyboardType="numeric"
          onEndEditingInput={text =>
            updateVariables({...variables, dap1: text}, UPDATE_VARIABLES)
          }
        />
        <TextInputVar
          label={'DAP2 (cm)'}
          placeholder={'DAP2'}
          value={variables?.dap2}
          keyboardType="numeric"
          onEndEditingInput={text =>
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
