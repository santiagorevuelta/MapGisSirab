import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-paper';
import {theme} from '../../core/theme';
import Button from '../Button';
import React from 'react';
import Limpiar from '../icons/Limpiar';

const RenderSearch = ({
  filtros,
  fnLimpiar,
  isSwitchOn,
  onToggleSwitch,
  fnBuscar,
}) => {
  return (
    <View style={styles.search}>
      <View style={styles.content}>
        <Switch
          value={isSwitchOn}
          select={styles.swich}
          onValueChange={onToggleSwitch}
          color={theme.colors.primary}
        />
        <Text style={[theme.textos.Label, styles.masFiltros]}>
          {'Otros Filtros'}
        </Text>
      </View>
      <View style={styles.content}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? theme.pressed : theme.offPressed,
            },
          ]}
          onPress={() => {
            fnLimpiar(false);
          }}>
          <Limpiar />
        </Pressable>
        <Button
          style={styles.boton}
          mode="contained"
          onPress={() => {
            fnBuscar(true, filtros);
          }}>
          Buscar
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    marginTop: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: -1,
  },
  masFiltros: {
    alignItems: 'center',
  },
  limpiar: {
    padding: '2%',
  },
  boton: {
    marginLeft: '5%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swich: {},
});

export default RenderSearch;
