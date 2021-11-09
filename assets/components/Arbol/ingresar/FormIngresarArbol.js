import React from 'react';
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

const selectPlace = 'Seleccione...';

export default props => {
  const [dataForm, setDataForm] = React.useState(json.datosArbol);
  const [dataVar, setDataVar] = React.useState(json.datosVariables);
  const [dataImage, setDataImage] = React.useState([]);
  const [combos] = React.useState(props.combos);
  const [combosBarrios, setCombosBarrios] = React.useState([]);

  const llenarBarrio = id => {
    consultarBarrios(id).then(barrios => {
      setDataForm({...dataForm, segundo_nivel: null});
      setCombosBarrios(barrios);
    });
  };


  const ubicarEnMapa = async () => {
    await getCoords().then(data => {
      setDataForm({...dataForm, latitud: data?.lat, longitud: data?.lng});
    });
  };

  const guardar = async () => {
    props.fnGuardar(dataForm, dataVar, dataImage);
  };

  return (
    <View style={{paddingHorizontal: '5%'}}>
      <View style={styles.form}>
        <SelectSimple
          label={'Especie'}
          id="especie"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, especie: items.id});
            }
          }}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={'Código árbol'}
          placeholder={'Código árbol'}
          returnKeyType="next"
          value={dataForm.codigo_arbol}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={text => setDataForm({...dataForm, codigo_arbol: text})}
        />
        <DatePicker
          label={'Fecha de ingreso'}
          placeholder={'dd/mm/aaaa'}
          value={dataForm.fecha}
          keyboardType="default"
          onChangeText={text => setDataForm({...dataForm, fecha: text})}
          onSelectDate={text => setDataForm({...dataForm, fecha: text})}
        />
      </View>
      <View style={styles.form}>
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
      <View style={styles.form}>
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
        <TextInputForm
          label={'latitud'}
          editable={false}
          placeholder={'latitud'}
          value={dataForm.latitud}
        />
        <TextInputForm
          label={'longitud'}
          editable={false}
          placeholder={'longitud'}
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
    </View>
  );
};
