import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../commons/TextInputForm';
import {Button as ButtonIcon} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import {notifyMessage} from '../../core/general';
import Buscar from '../commons/Buscar';
import styles from '../css/ingresarcss';
import FiltroFecha from '../commons/FechaBusqueda/FiltroFecha';

export default ({combos, fnBuscar, fnLimpiar}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [filters, setFilters] = React.useState({}); //UPB-000005
  const [valorAutoComplete, setValorAutoComplete] = React.useState(null); //UPB-000005
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const limpiar = data => {
    fnLimpiar(data);
    setFilters({});
    setValorAutoComplete(null);
    setIsSwitchOn(false);
  };

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
          </View>
        </View>
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
      </View>

      <View style={[styles.form, {zIndex: 9}]}>
        {/*        <AutoComplete
          label={'Especie'}
          id="especie"
          selectedItem={valorAutoComplete}
          onSelected={items => {
            if (items != null) {
              setValorAutoComplete(items.dato);
              setFilters({...filters, especie: items.id});
            }
          }}
          list={combos}
        />*/}
        <SelectSimple
          label={'Especie'}
          id="especie"
          valueSelected={filters.especie}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, especie: items});
            }
          }}
          list={combos}
        />
      </View>
      {isSwitchOn && (
        <>
          <View style={[styles.form, {zIndex: 8}]}>
            <SelectSimple
              label={'Tipo árbol'}
              id="tipo_arbol"
              valueSelected={filters.id_tipo_arbol}
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_arbol: items});
                }
              }}
              list={combos}
            />
            <SelectSimple
              label={'Tipo origen árbol'}
              id="origen_arbol"
              valueSelected={filters.id_tipo_origen_arbol}
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_origen_arbol: items});
                }
              }}
              list={combos}
            />
          </View>
          <FiltroFecha filters={filters} setFilters={setFilters} />
        </>
      )}
      <Buscar
        isSwitchOn={isSwitchOn}
        onToggleSwitch={onToggleSwitch}
        filtros={filters}
        fnBuscar={fnBuscar}
        fnLimpiar={limpiar}
      />
    </View>
  );
};
