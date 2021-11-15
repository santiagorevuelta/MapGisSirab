import React from 'react';
import {View} from 'react-native';
import Buscar from '../commons/Buscar';
import styles from '../css/ingresarcss';

export default ({fnBuscar, fnLimpiar}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  return (
    <View style={styles.body}>
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
