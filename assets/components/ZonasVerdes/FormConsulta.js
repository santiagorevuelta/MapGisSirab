import React from 'react';
import {View} from 'react-native';
import TextInputForm from '../commons/TextInputForm';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import Buscar from '../commons/Buscar';
import DatePicker from '../commons/DatePicker/DatePicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from '../css/ingresarcss';

let selectPlace = 'Todos...';

export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      enableResetScrollToCoords={true}
      style={styles.body}>
      <View style={styles.form}>
        <View />
        <TextInputForm
          label={'Código'}
          placeholder={'Código'}
          keyboardType="default"
        />
      </View>
      <View style={styles.form}>
        <DatePicker
          label={'Fecha inicial'}
          placeholder={'Fecha inicial'}
          value={filters.fechaini}
          keyboardType="default"
          onSelectDate={text => setFilters({...filters, fechaini: text})}
        />
        <DatePicker
          label={'Fecha final'}
          placeholder={'Fecha final'}
          value={filters.fechaFin}
          keyboardType="default"
          onSelectDate={text => setFilters({...filters, fechaFin: text})}
        />
      </View>
      {isSwitchOn && (
        <View style={styles.form}>
          <SelectSimple
            label={'Comuna'}
            id="primer_nivel"
            placeholder={selectPlace}
            // valueSelected={dataForm.comuna}
            onSelected={items => {
              if (items != null) {
                //llenarBarrio(items.id);
                //setDataForm({...dataForm, primer_nivel: items.id});
              }
            }}
            // list={combos}
          />
          <SelectSimple
            label={'Barrio'}
            id="segundo_nivel"
            //disabledView={combosBarrios.length === 0}
            placeholder={selectPlace}
            dependencia={true}
            //valueSelected={dataForm.segundo_nivel}
            onSelected={items => {
              if (items != null) {
                //setDataForm({...dataForm, segundo_nivel: items.id});
              }
            }}
            // list={combosBarrios}
          />
        </View>
      )}
      <Buscar
        isSwitchOn={isSwitchOn}
        onToggleSwitch={onToggleSwitch}
        filtros={filters}
        fnBuscar={props.fnBuscar}
        fnLimpiar={props.fnLimpiar}
      />
    </KeyboardAwareScrollView>
  );
};
