import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../commons/TextInputForm';
import {Button as ButtonIcon} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import {notifyMessage} from '../../core/general';
import Buscar from '../commons/Buscar';
import DatePicker from '../commons/DatePicker/DatePicker';
import AutoComplete from '../commons/SelectAutoComplete/AutoComplete';
import styles from '../css/ingresarcss';

export default ({combos, fnBuscar, fnLimpiar}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [filters, setFilters] = React.useState({});
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.body}>
      <View style={[styles.form]}>
        <View style={styles.geoConsult}>
          <Text style={theme.textos.LabelIn}>{'Consulta geográfica'}</Text>
          <View style={styles.geoButons}>
            <ButtonIcon
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(3)}}
              icon="vector-point"
              color={theme.colors.primary}
              onPress={() => {
                notifyMessage('Seleccionar punto en mapa');
              }}
            />
            <ButtonIcon
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(3)}}
              icon="vector-line"
              color={theme.colors.primary}
              onPress={() => {}}
            />
            <ButtonIcon
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(3)}}
              icon="vector-square"
              color={theme.colors.primary}
              onPress={() => {}}
            />
            <ButtonIcon
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(3)}}
              icon="umbrella"
              color={theme.colors.primary}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>

      <View style={styles.form}>
        <TextInputForm
          label={'Código árbol'}
          placeholder={'Código árbol'}
          returnKeyType="next"
          value={filters.codigo_arbol}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="name"
          keyboardType="default"
          onChangeTextInput={text =>
            setFilters({...filters, codigo_arbol: text})
          }
        />
        <SelectSimple
          label={'Estado'}
          id="id_estado"
          valueSelected={filters.id_estado}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, id_estado: '6'});
            }
          }}
          list={combos}
        />
      </View>
      <View style={styles.form}>
        <AutoComplete
          label={'Especie'}
          id="especie"
          selectedItem={filters.especie}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, especie: items.id});
            }
          }}
          list={combos}
        />
      </View>
      {isSwitchOn && (
        <>
          <View style={styles.form}>
            <SelectSimple
              label={'Tipo árbol'}
              id="tipo_arbol"
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_arbol: '6'});
                }
              }}
              list={combos}
            />
            <SelectSimple
              label={'Tipo origen árbol'}
              id="origen_arbol"
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_origen_arbol: '2'});
                }
              }}
              list={combos}
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
        </>
      )}
      <Buscar
        isSwitchOn={isSwitchOn}
        onToggleSwitch={onToggleSwitch}
        filtros={filters}
        fnBuscar={fnBuscar}
        fnLimpiar={fnLimpiar}
      />
    </View>
  );
};
