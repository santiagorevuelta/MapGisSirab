import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../../core/theme';
import {Button as ButtonIcon} from 'react-native-paper';
import SelectSimple from '../../commons/selectSimple/SelectSimple';
import DatePicker from '../../commons/DatePicker/DatePicker';
import styles from '../../css/ingresarcss';
import TextArea from '../../commons/TextArea';
import FormImagenes from '../../../components/commons/imagenes/FormImagenes';
import TextInputForm from '../../commons/TextInputForm';
import consultarBarrios from '../../../helpers/consultaBarrios';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import {drawPolin, limpiarMapa} from '../../map/BackgroundMap';
import AsyncStorage from '@react-native-async-storage/async-storage';

const selectPlace = 'Seleccione...';

export default ({combos = [], fnGuardar}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);
  const [polygon, setPolygon] = React.useState([]);
  const [combosBarrios, setCombosBarrios] = React.useState([]);

  useEffect(() => {
    limpiarMapa();
  }, []);

  const llenarBarrio = async id => {
    if (id !== '') {
      let res = await consultarBarrios(id);
      setCombosBarrios(res);
    } else {
      setCombosBarrios([]);
    }
  };

  const getPolygon = async () => {
    let result = await AsyncStorage.getItem('polygon');
    if (result != null) {
      result = JSON.parse(result);
      let finalJ = '';
      for (const data of result) {
        finalJ += `${data.lat} ${data.lng},`;
      }
      finalJ += `${result[0].lat} ${result[0].lng}`;
      setDataForm({...dataForm, geom: `POLYGON(${finalJ})`});
    } else {
      setTimeout(() => {
        getPolygon().then();
      }, 2000);
    }
  };

  return (
    <ScrollView>
      <KeyboardAwareScrollView style={styles.body}>
        <View style={styles.form}>
          <TextInputForm
            label={'Código zona verde *'}
            placeholder={'Código zona verde'}
            value={dataForm.codigo}
            keyboardType="default"
            onChangeTextInput={text => setDataForm({...dataForm, codigo: text})}
          />
          <DatePicker
            label={'Fecha de ingreso'}
            placeholder={'dd/mm/aaaa'}
            value={dataForm.fecha}
            keyboardType="default"
            onSelectDate={text => setDataForm({...dataForm, fecha: text})}
          />
        </View>
        <View style={[styles.form, {zIndex: 9}]}>
          <TextInputForm
            label={'Nombre zona verde *'}
            placeholder={'Código árbol'}
            value={dataForm.nombre}
            keyboardType="default"
            onChangeTextInput={text => setDataForm({...dataForm, nombre: text})}
          />
          <SelectSimple
            label={'Tipo zona verde *'}
            id="id_tipo_zona_verde"
            placeholder={selectPlace}
            valueSelected={dataForm.id_tipo_zona_verde}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, id_tipo_zona_verde: items});
              }
            }}
            list={combos}
          />
        </View>
        <View style={[styles.form, {zIndex: 8}]}>
          <SelectSimple
            label={'Comuna *'}
            id="primer_nivel"
            placeholder={selectPlace}
            valueSelected={dataForm.primer_nivel}
            onSelected={items => {
              if (items != null) {
                llenarBarrio(items);
                setDataForm({...dataForm, primer_nivel: items});
              }
            }}
            list={combos}
          />
          <SelectSimple
            label={'Barrio *'}
            id="segundo_nivel"
            disabledView={combosBarrios.length === 0}
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
        <View style={[styles.form, {zIndex: 7}]}>
          <View
            style={[
              styles.form,
              styles.geo,
              {width: '50%', flexDirection: 'column'},
            ]}>
            <Text style={theme.textos.LabelIn}>
              {'Coordenadas geográficas *'}
            </Text>
            <View style={styles.geoButons}>
              <ButtonIcon
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="vector-polyline-plus"
                color={theme.colors.primary}
                onPress={() => {
                  drawPolin();
                  getPolygon().then();
                }}
              />
            </View>
          </View>
          <SelectSimple
            label={'Proyecto *'}
            id="proyecto"
            placeholder={selectPlace}
            valueSelected={dataForm.id_proyecto}
            onSelected={items => {
              if (items != null) {
                setDataForm({...dataForm, id_proyecto: items});
              }
            }}
            list={combos}
          />
        </View>
        <View style={styles.form}>
          <TextInputForm
            label={'Área m² *'}
            placeholder={'Área'}
            value={dataForm.area_m2}
            keyboardType="default"
            onChangeTextInput={text =>
              setDataForm({...dataForm, area_m2: text})
            }
          />
          <TextInputForm
            label={'Área calculada m² *'}
            placeholder={'Área calculada'}
            value={dataForm.area_m2_calculado}
            keyboardType="default"
            onChangeTextInput={text =>
              setDataForm({...dataForm, area_m2_calculado: text})
            }
          />
        </View>

        <View style={styles.form}>
          <TextArea
            label={'Descripción'}
            placeholder={'Descripción'}
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="name"
            value={dataForm.descripcion}
            keyboardType="default"
            onChangeText={text => setDataForm({...dataForm, descripcion: text})}
          />
        </View>
        <View style={[styles.form, {marginTop: 10}]}>
          <FormImagenes dataImage={dataImage} setDataImage={setDataImage} />
        </View>
        <View style={[styles.form, {justifyContent: 'flex-end'}]}>
          <ButtonIcon
            compact={true}
            mode="contained"
            style={styles.guardar}
            icon="content-save"
            color={theme.colors.primary}
            onPress={() => {
              fnGuardar(dataForm, dataImage);
            }}>
            Guardar
          </ButtonIcon>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};
