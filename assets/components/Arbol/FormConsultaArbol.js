import React from 'react';
import {View} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../commons/TextInputForm';
import {Button as ButtonIcon} from 'react-native-paper';
//import Button from '../Button'
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import {notifyMessage} from '../../core/general';
import Buscar from '../commons/Buscar';
import styles from '../css/ingresarcss';
import FiltroFecha from '../commons/FechaBusqueda/FiltroFecha';
import AutoComplete from '../commons/SelectAutoComplete/AutoComplete';
import {onMapClickLocation} from '../map/BackgroundMap';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({combos, fnBuscar, fnLimpiar}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [filters, setFilters] = React.useState({});
  const [valorAutoComplete, setValorAutoComplete] = React.useState([]);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const limpiar = data => {
    fnLimpiar(data);
    setFilters({});
    setValorAutoComplete([]);
    setIsSwitchOn(false);
  };

  const ubicarEnMapa = async () => {
    onMapClickLocation();
    let result = await AsyncStorage.getItem('coords');
    if (result != null) {
      result = JSON.parse(result);
      setFilters({
        ...filters,
        latitud: result.lat,
        longitud: result.lng,
      });
    } else {
      setTimeout(() => {
        ubicarEnMapa().then();
      }, 500);
    }
  };

  return (
    <View style={styles.body}>
      <View style={[styles.form]}>
        <View style={styles.geoConsult}>
          <ButtonIcon
            compact={true}
            mode="Outlined"
            style={styles.geoButon}
            color={theme.colors.primary}
            labelStyle={{fontSize: responsiveScreenFontSize(1)}}
            onPress={() => {
              AsyncStorage.setItem('coords', '');
              notifyMessage('Seleccionar punto en mapa');
              ubicarEnMapa().then();
            }}>
            Consulta geográfica
          </ButtonIcon>
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
        <AutoComplete
          label={'Especie'}
          id="especie"
          valueSelected={valorAutoComplete}
          stylesNew={{width: responsiveWidth(90), paddingHorizontal: '2%'}}
          Limpiar={true}
          onSelected={items => {
            if (items != null) {
              setValorAutoComplete(items);
              let data = items.map(e => {
                return parseInt(e.id, 10);
              });
              setFilters({
                ...filters,
                especie: data,
              });
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
