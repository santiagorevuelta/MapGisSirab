import React from 'react';
import {View} from 'react-native';
import Buscar from '../commons/Buscar';
import styles from '../css/ingresarcss';
import TextInputForm from '../commons/TextInputForm';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import {limpiarMapaPolygon} from '../map/BackgroundMap';
import FiltroFecha from '../commons/FechaBusqueda/FiltroFecha';

export default ({fnBuscar, fnLimpiar, combos}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  const limpiar = data => {
    fnLimpiar(data);
    setFilters({});
    limpiarMapaPolygon();
    setIsSwitchOn(false);
  };

  return (
    <View style={styles.body}>
      <View style={styles.form}>
        <TextInputForm
          label={'Código zona verde'}
          placeholder={'Código zona verde'}
          value={filters.codigo}
          keyboardType="default"
          onChangeTextInput={text => setFilters({...filters, codigo: text})}
        />
        <TextInputForm
          label={'Nombre zona verde'}
          placeholder={'Código árbol'}
          value={filters.nombre}
          keyboardType="default"
          onChangeTextInput={text => setFilters({...filters, nombre: text})}
        />
      </View>
      <View style={[styles.form, {zIndex: 9}]}>
        <SelectSimple
          label={'Proyecto'}
          id="proyecto"
          valueSelected={filters.id_proyecto}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, id_proyecto: items});
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={'Tipo zona verde'}
          id="id_tipo_zona_verde"
          valueSelected={filters.id_tipo_zona_verde}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, id_tipo_zona_verde: items});
            }
          }}
          list={combos}
        />
      </View>
      {isSwitchOn && <FiltroFecha filters={filters} setFilters={setFilters} />}
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
