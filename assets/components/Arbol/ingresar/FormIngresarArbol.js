import React,{useEffect} from 'react';
import consultarBarrios from '../../../helpers/consultaBarrios';
import {Text, View} from 'react-native';
import {theme} from '../../../core/theme';
import {Button as ButtonIcon} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import TextInputForm from '../TextInputForm';
import SelectSimple from '../../commons/selectSimple/SelectSimple';
import DatePicker from '../../commons/DatePicker/DatePicker';
import {notifyMessage} from '../../../core/general';
import {getCoords} from '../../map/BackgroundMap';
import styles from '../../css/ingresarcss';
import json from '../../../initialjson.json';
import TabIngresar from '../ingresar/tab/TabIngresar';
import TextSimple from '../../commons/TextSimple'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AutoComplete from '../../commons/SelectAutoComplete/AutoComplete';

const selectPlace = 'Seleccione...';

export default ({combos = [],fnGuardar}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [dataVar, setDataVar] = React.useState(json.datosVariables);
  const [dataImage, setDataImage] = React.useState([]);
  const [combosBarrios, setCombosBarrios] = React.useState([]);

  const llenarBarrio = async id => {
    let data = await consultarBarrios(id);
    setCombosBarrios(data);
  };

  const ubicarEnMapa = async () => {
      setTimeout(async ()=>{
        let value = await AsyncStorage.getItem("coords");
         value = (value === null ? null : JSON.parse(value));
          if (value !== null) {
            if(value.lat != dataForm.latitud) {
                setDataForm({...dataForm, latitud: value.lat,longitud: value.lng});
            }
          }
      },5000);
     //setTimeout(async ()=>{ubicarEnMapa();},5000);
  };

  const guardar = async () => {
      let value = await AsyncStorage.getItem("coords");
      value = (value === null ? null : JSON.parse(value));
      if (value !== null) {
         setDataForm({...dataForm, latitud: value.lat,longitud: value.lng});
      }
    fnGuardar(dataForm, dataVar, dataImage);
  };

  return (
      <ScrollView>
    <KeyboardAwareScrollView style={styles.body}>
      <View style={[styles.form,{zIndex:10}]}>
        <AutoComplete
          label={'Especie'}
          id="especie"
          placeholder={selectPlace}
          selectedItem={dataForm.especie}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, especie: items.id});
            }
          }}
          list={combos}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'Código árbol'}
          placeholder={'Código árbol'}
          value={dataForm.codigo_arbol}
          keyboardType="default"
          onChangeTextInput={text => setDataForm({...dataForm, codigo_arbol: text})}
        />
        <DatePicker
          label={'Fecha de ingreso'}
          placeholder={'dd/mm/aaaa'}
          value={dataForm.fecha}
          keyboardType="default"
          onSelectDate={text => setDataForm({...dataForm, fecha: text})}
        />
      </View>
      <View style={[styles.form,{zIndex:9}]}>
        <SelectSimple
          label={'Tipo árbol'}
          id="tipo_arbol"
          placeholder={selectPlace}
          valueSelected={dataForm.tipo_arbol}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, tipo_arbol: items.id});
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={'Tipo origen árbol'}
          id="origen_arbol"
          placeholder={selectPlace}
          valueSelected={dataForm.origen_arbol}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, origen_arbol: items.id});
            }
          }}
          list={combos}
        />
      </View>
      <View style={[styles.form,{zIndex:8}]}>
        <SelectSimple
          label={'Comuna'}
          id="primer_nivel"
          placeholder={selectPlace}
          valueSelected={dataForm.comuna}
          onSelected={items => {
            if (items != null) {
              llenarBarrio(items.id);
              setDataForm({...dataForm, primer_nivel: items.id});
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={'Barrio'}
          id="segundo_nivel"
          disabledView={combosBarrios.length === 0}
          placeholder={selectPlace}
          dependencia={true}
          valueSelected={dataForm.segundo_nivel}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, segundo_nivel: items.id});
            }
          }}
          list={combosBarrios}
        />
      </View>
      <View style={[styles.form, styles.geo]}>
        <Text style={theme.textos.LabelIn}>{'Coordenadas geográficas'}</Text>
        <View style={styles.geoButons}>
          <ButtonIcon
            compact={true}
            labelStyle={{fontSize: responsiveFontSize(3)}}
            icon="map-marker-radius-outline"
            color={theme.colors.primary}
            onPress={() => {
              notifyMessage('Seleccionar punto en mapa');
              ubicarEnMapa();
            }}
          />
        </View>
      </View>
      <View style={styles.form}>
          <TextSimple
              label={'latitud'}
              value={dataForm.latitud}
          />
          <TextSimple
              label={'longitud'}
              value={dataForm.longitud}
          />
      </View>
      <TabIngresar
        dataVar={dataVar}
        dataImage={dataImage}
        setDataVar={setDataVar}
        setDataImage={setDataImage}
      />
      <View style={[styles.form, {justifyContent: 'flex-end'}]}>
        <ButtonIcon
          compact={true}
          mode="contained"
          style={styles.guardar}
          icon="content-save"
          color={theme.colors.primary}
          onPress={() => {
            guardar();
          }}>
          Guardar
        </ButtonIcon>
      </View>
    </KeyboardAwareScrollView>
      </ScrollView>
  );
};
