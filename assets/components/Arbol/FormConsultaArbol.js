import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from '../../core/theme';
import TextInputForm from '../Arbol/TextInputForm';
import {Switch, Button as ButtonIcon} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Button from '../Button';
import SelectSimple from '../selectSimple/SelectSimple';
import {notifyMessage} from '../../core/general';
export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [filters, setFilters] = React.useState({});
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{paddingHorizontal: '5%'}}>
      <View>
        <View style={styles.form}>
          <View>
            <ButtonIcon
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(5)}}
              icon="vector-point"
              color={theme.colors.primary}
              onPress={() => {
                notifyMessage('Seleccionar punto en mapa');
              }}
            />
          </View>
          <TextInputForm
            label={'Código'}
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="username"
            textContentType="name"
            keyboardType="default"
            onChangeText={text => setFilters({...filters, codigo_arbol: text})}
          />
        </View>
        <View style={styles.form}>
          <SelectSimple
            label={'hola'}
            onSelected={items => {
              let id = null;
              if (items != null) {
                id = items.value;
              }
            }}
            list={[
              {label: 'Este', value: 0},
              {label: 'O este', value: 1},
            ]}
          />
          <TextInputForm
            label={'Número del proyecto'}
            onChangeText={text => setFilters({...filters, numero: text})}
          />
        </View>
        <View style={styles.form}>
          <TextInputForm label={'Nombre cientifico'} />
          <TextInputForm label={'Año'} />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.content}>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={theme.colors.primary}
          />
          <Text style={[theme.textos.Label, styles.masFiltros]}>
            {'Otros Filtros'}
          </Text>
        </View>
        <View style={styles.content}>
          <ButtonIcon
            compact={true}
            labelStyle={{fontSize: responsiveFontSize(3)}}
            icon="broom"
            color={theme.colors.primary}
            onPress={() => {
              props.fnBuscar(false);
            }}
          />

          <Button
            style={styles.boton}
            mode="contained"
            onPress={() => {
              props.fnBuscar(true, filters);
            }}>
            Buscar
          </Button>
        </View>
      </View>
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
  search: {
    marginTop: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  masFiltros: {
    paddingTop: '4%',
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
  },
});
