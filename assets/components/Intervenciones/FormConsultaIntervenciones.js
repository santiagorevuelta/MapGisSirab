import React from 'react';
import {View} from 'react-native';
import Buscar from '../commons/Buscar';
import style from '../../components/css/ingresarcss';
import styles from '../css/ingresarcss';
import SelectSimple from '../commons/selectSimple/SelectSimple';
import FiltroFecha from '../commons/FechaBusqueda/FiltroFecha';

export default ({combos, fnLimpiar, fnBuscar}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  const limpiar = data => {
    fnLimpiar(data);
    setFilters({});
    setIsSwitchOn(false);
  };

  return (
    <View style={style.body}>
      <View style={[styles.form, {zIndex: 10}]}>
        <SelectSimple
          label={'Tipo intervención'}
          id="tipo_intervencion"
          valueSelected={filters.tipo_intervencion}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, tipo_intervencion: items});
            }
          }}
          list={combos}
        />
      </View>
      <View style={[styles.form, {zIndex: 9}]}>
        <SelectSimple
          label={'Proyecto'}
          id="proyecto"
          valueSelected={filters.proyecto}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, proyecto: items});
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={'Intervencion secundaria'}
          id="intervencion_secundaria"
          valueSelected={filters.intervencion_secundaria}
          onSelected={items => {
            if (items != null) {
              setFilters({...filters, proyecto: items});
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
