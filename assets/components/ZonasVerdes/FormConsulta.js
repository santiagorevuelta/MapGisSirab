import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../Arbol/TextInputForm';
import {Switch, Button as ButtonIcon} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../Button';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import Buscar from "../commons/Buscar";
import DatePicker from "../commons/DatePicker/DatePicker";


export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});
  const [combos, setCombos] = React.useState([]);

  return (
    <View style={{paddingHorizontal: '5%'}}>
        <View style={styles.form}>
          <View />
          <TextInputForm
            label={'Código'}
            placeholder={'Código'}
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="username"
            textContentType="name"
            keyboardType="default"
          />
        </View>
      <View style={styles.form}>
        <DatePicker
            label={"Fecha inicial"}
            placeholder={"Fecha inicial"}
            value={filters.fechaini}
            keyboardType="default"
            onChangeText={text => setFilters({ ...filters, fechaini: text })}
            onSelectDate={text => setFilters({ ...filters, fechaini: text })} />
        <DatePicker
            label={"Fecha final"}
            placeholder={"Fecha final"}
            value={filters.fechaFin}
            keyboardType="default"
            onChangeText={text => setFilters({ ...filters, fechaFin: text })}
            onSelectDate={text => setFilters({ ...filters, fechaFin: text })} />
      </View>
      {isSwitchOn && (
          <View style={styles.form}>
          <SelectSimple
              label={"Comuna"}
              id="primer_nivel"
              placeholder={selectPlace}
              valueSelected={dataForm.comuna}
              onSelected={items => {
                if (items != null) {
                  llenarBarrio(items.id);
                  setDataForm({ ...dataForm, primer_nivel: items.id });
                }
              }}
              list={combos}
          />
          <SelectSimple
              label={"Barrio"}
              id="segundo_nivel"
              disabledView={combosBarrios.length === 0}
              placeholder={selectPlace}
              dependencia={true}
              valueSelected={dataForm.segundo_nivel}
              onSelected={items => {
                if (items != null) {
                  setDataForm({ ...dataForm, segundo_nivel: items.id });
                }
              }}
              list={combosBarrios}
          />
      </View>)}
      <Buscar isSwitchOn={isSwitchOn} onToggleSwitch={onToggleSwitch}  filtros={filters} fnBuscar={props.fnBuscar} fnLimpiar={props.fnLimpiar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flexDirection: 'column',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
