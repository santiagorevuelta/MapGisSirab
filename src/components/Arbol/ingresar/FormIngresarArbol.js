import React, {useContext, useEffect} from 'react';
import consultarBarrios from '../../../helpers/consultaBarrios';
import {View} from 'react-native';
import {theme} from '../../../core/theme';
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TextInputForm from '../../commons/TextInputForm';
import SelectSimple from '../../commons/selectSimple/SelectSimple';
import DatePicker from '../../commons/DatePicker/DatePicker';
import {campoObligatory, notifyMessage} from '../../../core/general';
import styles from '../../css/ingresarcss';
import TabIngresar from '../ingresar/tab/TabIngresar';
import TextSimple from '../../commons/TextSimple';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPoint, stopPoint} from '../../map/BackgroundMap';
import AutoComplete from '../../commons/SelectAutoComplete/AutoComplete';
import {Button as ButtonIcon} from 'react-native-paper';
import ButtonInsert from '../../ButtonInsert';
import {asignar, consultar, reset} from '../../../helpers/dataSave';
import initialjson from '../../../initialjson.json';
import VariableContext from '../../../../Context/variables/VariableContext';
const selectPlace = 'Seleccione...';

export default ({combos = [], fnGuardar, setIndexSnap, setLoadApp}) => {
  const [dataForm, setDataForm] = React.useState(initialjson.datosArbol);
  const [dataImage, setDataImage] = React.useState([]);
  const [limpiarEspecie, setLimpiarEspecie] = React.useState(false);
  const [combosBarrios, setCombosBarrios] = React.useState([]);
  const [modeBtn, setModeBtn] = React.useState('outlined');

  //context
  const {variables, deleteVariables} = useContext(VariableContext);
  const [dataVar, setDataVar] = React.useState(variables);

  const llenarBarrio = async id => {
    setLoadApp(true);
    if (id !== '') {
      let res = await consultarBarrios(id);
      setCombosBarrios(res);
    } else {
      setCombosBarrios([]);
    }
    setLoadApp(false);
  };

  const ubicarEnMapa = async () => {
    getPoint();
    let result = await AsyncStorage.getItem('coords');
    if (result != null) {
      result = JSON.parse(result);
      setDataForm({
        ...dataForm,
        latitud: result.lat,
        longitud: result.lng,
      });
      setModeBtn('outlined');
    } else {
      setTimeout(() => {
        ubicarEnMapa().then();
      }, 500);
    }
  };

  const guardar = async () => {
    setDataVar(variables);
    setLoadApp(true);
    validateSave();
  };

  function validateSave() {
    if (dataForm.especie === '' || !dataForm.especie) {
      campoObligatory('Especie');
      setLoadApp(false);
    } else if (dataForm.codigo_arbol === '' || !dataForm.codigo_arbol) {
      campoObligatory('Codigo árbol');
      setLoadApp(false);
    } else if (dataForm.fecha === '' || !dataForm.fecha) {
      campoObligatory('Fecha de ingreso');
      setLoadApp(false);
    } else if (dataForm.id_tipo_arbol === '' || !dataForm.id_tipo_arbol) {
      campoObligatory('Tipo árbol');
      setLoadApp(false);
    } else if (
      dataForm.id_tipo_origen_arbol === '' ||
      !dataForm.id_tipo_origen_arbol
    ) {
      campoObligatory('Tipo origen árbol');
      setLoadApp(false);
    } else if (dataForm.primer_nivel === '' || !dataForm.primer_nivel) {
      campoObligatory('Comuna');
      setLoadApp(false);
    } else if (dataForm.segundo_nivel === '' || !dataForm.segundo_nivel) {
      campoObligatory('Barrio');
      setLoadApp(false);
    } else if (
      dataForm.latitud === '' ||
      !dataForm.latitud ||
      dataForm.longitud === '' ||
      !dataForm.longitud
    ) {
      campoObligatory('Punto');
      setLoadApp(false);
    } else if (dataVar.altura === '' || !dataVar.altura) {
      campoObligatory('Altura');
      setLoadApp(false);
    } else if (dataVar.altura_copa === '' || !dataVar.altura_copa) {
      campoObligatory('Altura copa');
      setLoadApp(false);
    } else if (dataVar.dap1 === '' || !dataVar.dap1) {
      campoObligatory('DAP1');
      setLoadApp(false);
    } else if (dataVar.dap2 === '' || !dataVar.dap2) {
      campoObligatory('DAP2');
      setLoadApp(false);
    } else if (dataVar.fecha_ingreso === '' || !dataVar.fecha_ingreso) {
      campoObligatory('fecha ingreso');
      setLoadApp(false);
    } else {
      try {
        dataForm.fecha = rev(dataForm.fecha);
        dataVar.fecha_ingreso = rev(dataVar.fecha_ingreso);
      } catch (e) {}
      fnGuardar(dataForm, dataVar, dataImage)
        .then(res => {
          if (res === 'Ok') {
            deleteVariables();
            setLimpiarEspecie(true);
            setDataForm({});
            AsyncStorage.setItem('coords', '');
            setDataImage([]);
            setDataForm(initialjson.datosArbol);
            stopPoint();
          }
          setLoadApp(false);
        })
        .catch(() => {
          setLoadApp(false);
        });
    }
  }

  function rev(data) {
    return data.split('/').reverse().join('-');
  }

  return (
    <ScrollView>
      <KeyboardAwareScrollView style={styles.body}>
        <View style={[styles.form, {zIndex: 10, elevation: 10}]}>
          <AutoComplete
            label={'Especie *'}
            id="especie"
            stylesNew={{width: responsiveWidth(92), paddingHorizontal: '2%'}}
            placeholder={selectPlace}
            valueSelected={dataForm.especie}
            multiple={false}
            limpiar={limpiarEspecie}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, especie: items});
              }
            }}
            list={combos}
          />
        </View>
        <View style={styles.form}>
          <TextInputForm
            label={'Código árbol *'}
            placeholder={'Código árbol'}
            value={dataForm.codigo_arbol}
            keyboardType="default"
            onChangeTextInput={text =>
              setDataForm({...dataForm, codigo_arbol: text})
            }
          />
          <DatePicker
            label={'Fecha de ingreso *'}
            placeholder={'dd/mm/aaaa'}
            value={dataForm.fecha}
            keyboardType="default"
            onSelectDate={text =>
              setDataForm({
                ...dataForm,
                fecha: text,
              })
            }
          />
        </View>
        <View style={[styles.form, {zIndex: 9}]}>
          <SelectSimple
            label={'Tipo árbol *'}
            id="tipo_arbol"
            placeholder={selectPlace}
            valueSelected={dataForm.id_tipo_arbol}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, id_tipo_arbol: items});
              }
            }}
            list={combos}
          />
          <SelectSimple
            label={'Tipo origen árbol *'}
            id="origen_arbol"
            placeholder={selectPlace}
            valueSelected={dataForm.id_tipo_origen_arbol}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, id_tipo_origen_arbol: items});
              }
            }}
            list={combos}
          />
        </View>
        <View style={[styles.form]}>
          <SelectSimple
            label={'Comuna *'}
            id="primer_nivel"
            placeholder={selectPlace}
            valueSelected={dataForm.primer_nivel}
            onSelected={items => {
              if (items != null) {
                llenarBarrio(items).then();
                setDataForm({...dataForm, primer_nivel: items});
              }
            }}
            list={combos}
          />
          <SelectSimple
            label={'Barrio *'}
            id="segundo_nivel"
            placeholder={selectPlace}
            dependencia={true}
            valueSelected={dataForm.segundo_nivel}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, segundo_nivel: items});
              }
            }}
            list={combosBarrios}
          />
        </View>
        <View style={[styles.form, styles.geoArbol]}>
          <ButtonIcon
            compact={true}
            mode={modeBtn}
            uppercase={false}
            style={[styles.geoButon, theme.textos.Label]}
            color={theme.colors.primary}
            labelStyle={{fontSize: responsiveScreenFontSize(1.6)}}
            onPress={() => {
              setLoadApp(true);
              setIndexSnap(1);
              setModeBtn('contained');
              AsyncStorage.setItem('coords', '');
              notifyMessage('Seleccionar punto en mapa');
              ubicarEnMapa().then();

              setLoadApp(false);
            }}>
            Seleccionar punto *
          </ButtonIcon>
        </View>
        {dataForm.latitud !== '' ? (
          <View style={styles.form}>
            <TextSimple label={'latitud'} value={dataForm.latitud} />
            <TextSimple label={'longitud'} value={dataForm.longitud} />
          </View>
        ) : null}
        <TabIngresar
          dataImage={dataImage}
          setDataImage={setDataImage}
          label={' '}
        />
        <View style={[styles.form, {justifyContent: 'flex-end'}]}>
          <ButtonInsert
            compact={true}
            mode="contained"
            style={styles.guardar}
            color={theme.colors.primary}
            onPress={() => {
              guardar();
            }}>
            Guardar
          </ButtonInsert>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};
