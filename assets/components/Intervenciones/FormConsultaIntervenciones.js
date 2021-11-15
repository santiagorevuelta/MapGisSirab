import React from 'react';
import {View} from 'react-native';
import Buscar from '../commons/Buscar';
import style from '../../components/css/ingresarcss';

export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  return (
    <View style={style.body}>
      {/*<View style={styles.form}>*/}
      {/*  <View />*/}
      {/*  <TextInputForm*/}
      {/*    label={'Código'}*/}
      {/*    placeholder={'Código'}*/}
      {/*    returnKeyType="next"*/}
      {/*    autoCapitalize="none"*/}
      {/*    autoCompleteType="username"*/}
      {/*    textContentType="name"*/}
      {/*    keyboardType="default"*/}
      {/*  />*/}
      {/*</View>*/}
      <Buscar
        isSwitchOn={isSwitchOn}
        onToggleSwitch={onToggleSwitch}
        filtros={filters}
        fnBuscar={props.fnBuscar}
      />
    </View>
  );
};
