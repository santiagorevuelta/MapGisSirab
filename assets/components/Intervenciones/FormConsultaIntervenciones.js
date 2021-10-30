import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '../../core/theme';
import Buscar from "../commons/Buscar";

export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [filters, setFilters] = React.useState({});

  return (
    <View style={{paddingHorizontal: '5%'}}>
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
      <Buscar isSwitchOn={isSwitchOn} onToggleSwitch={onToggleSwitch}  filtros={filters} fnBuscar={props.fnBuscar} />
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
