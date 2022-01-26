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
import {
  drawPolin,
  limpiarMapa,
  limpiarMapaPolygon,
} from '../../map/BackgroundMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {notifyMessage} from '../../../core/general';
import ButtonInsert from '../../ButtonInsert';

const selectPlace = 'Seleccione...';

export default ({combos = [], fnGuardar, setIndexSnap, setLoadApp}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);
  const [combosBarrios, setCombosBarrios] = React.useState([]);

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

  const getPolygon = async () => {
    let result = await AsyncStorage.getItem('polygon');
    let area = await AsyncStorage.getItem('area');
    if (result != null) {
      result = JSON.parse(result);
      let finalJ = '';
      for (const data of result) {
        finalJ += `${data.lng} ${data.lat},`;
      }
      finalJ += `${result[0].lng} ${result[0].lat}`;
      console.log(parseInt(area, 10));
      setDataForm({
        ...dataForm,
        geom: `POLYGON((${finalJ}))`,
        area_m2_calculado: parseInt(area, 10) + '',
      });
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
            label={'Fecha de ingreso *'}
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
        <View style={[styles.form, {zIndex: 7}]}>
          <View
            style={[
              styles.form,
              styles.geo,
              {width: '48%', flexDirection: 'column'},
            ]}>
            <Text style={theme.textos.LabelIn}>{'Dibujar poligono *'}</Text>
            <View style={styles.geoButons}>
              <ButtonIcon
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="vector-polyline-plus"
                color={theme.colors.primary}
                onPress={() => {
                  setIndexSnap(1);
                  notifyMessage('Toca en el mapa para iniciar a dibujar');
                  drawPolin();
                  getPolygon().then();
                }}
              />
              <ButtonIcon
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="cached"
                color={theme.colors.primary}
                onPress={() => {
                  limpiarMapa();
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
            keyboardType="numeric"
            onChangeTextInput={text =>
              setDataForm({...dataForm, area_m2: text})
            }
          />
          <TextInputForm
            label={'Área calculada m² *'}
            placeholder={'Área calculada'}
            editable={false}
            value={dataForm.area_m2_calculado}
            keyboardType="numeric"
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
          <ButtonInsert
            compact={true}
            mode="contained"
            style={styles.guardar}
            color={theme.colors.primary}
            onPress={() => {
              fnGuardar(dataForm, dataImage).then(res => {
                if (res === 'Ok') {
                  limpiarMapaPolygon();
                  setDataForm({});
                  setDataImage([]);
                }
              });
            }}>
            Guardar
          </ButtonInsert>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};
