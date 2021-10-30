import React from 'react';
import { StyleSheet, View, Text} from "react-native";
import {theme} from '../../core/theme';
import TextInputForm from '../Arbol/TextInputForm';
import {Switch, Button as ButtonIcon} from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Button from '../Button';
import SelectSimple from '../selectSimple/SelectSimple';
import {notifyMessage} from '../../core/general';
import Animate from 'react-native-reanimated'
import  combosArbol from '../../helpers/combosArbol'
import  AsyncStorage from '@react-native-async-storage/async-storage'
import Buscar from "../commons/Buscar";




export default props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [filters, setFilters] = React.useState({codigo_arbol: '8520'});
  const [especie, setEspecie] = React.useState([]);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  combosArbol().then(data => {
    //setEspecie(data)
  });


  return (
    <View style={{paddingHorizontal: '5%'}}>
      <View>
        <View style={styles.form}>
          <View style={styles.geo}>
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
                onPress={() => {
                }}
              />
              <ButtonIcon
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="vector-square"
                color={theme.colors.primary}
                onPress={() => {
                }}
              />
              <ButtonIcon
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="umbrella"
                color={theme.colors.primary}
                onPress={() => {
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
            onChangeText={text => setFilters({...filters, codigo_arbol: text})}
          />
        </View>
        <View style={styles.form}>
          <View>
            <SelectSimple
              label={'Especie'}
              key={''}
              onSelected={items => {
                if (items != null) {
                  //console.log(items.value);
                }
              }}
              list={especie}
            />
          </View>
        </View>
        {isSwitchOn && (<Animate.View style={styles.form}>
          <View>
            <SelectSimple
              label={'Tipo árbol'}
              key={''}
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_arbol: '6'})
                }
              }}
              list={[]}
            />
          </View>
          <View>
            <SelectSimple
              label={'Tipo origen árbol'}
              key={''}
              onSelected={items => {
                if (items != null) {
                  setFilters({...filters, id_tipo_origen_arbol: '2'})
                }
              }}
              list={[{label:'ff',value:'6'},{label:'ff',value:'6'},{label:'ff',value:'6'},{label:'ff',value:'6'},{label:'ff',value:'6'}]}
            />
          </View>
        </Animate.View>)}
        <View style={styles.form}>
          <TextInputForm label={'Fecha inicial'} />
          <TextInputForm label={'Fecha final'} />
        </View>
      </View>
      <Buscar isSwitchOn={isSwitchOn} onToggleSwitch={onToggleSwitch} filtros={filters} fnBuscar={props.fnBuscar}  fnLimpiar={props.fnLimpiar}/>
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
    justifyContent: 'flex-start',
    elevation: 0,
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
  geo:{
    width: responsiveWidth(45),
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: '2%',
  },
  geoButons:{
    flexDirection:"row",
    justifyContent:'space-around'
  }
});
