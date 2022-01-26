import React from 'react';
import {View} from 'react-native';
import {theme} from '../../../core/theme';
import SelectSimple from '../../commons/selectSimple/SelectSimple';
import DatePicker from '../../commons/DatePicker/DatePicker';
import styles from '../../css/ingresarcss';
import TextArea from '../../commons/TextArea';
import FormImagenes from '../../commons/imagenes/FormImagenes';
import TextInputForm from '../../commons/TextInputForm';
import AutoComplete from '../../commons/SelectAutoComplete/AutoComplete';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import TextSimple from '../../commons/TextSimple';
import Button from '../../Button';

const selectPlace = 'Seleccione...';

export default ({fnGuardar, combos = [], zonaVerde, dataArbol}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [dataSecondary, setDataSecondarym] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);

  return (
    <View style={styles.body}>
      <View style={[styles.form, {zIndex: 10}]}>
        <TextSimple
          label={'Codigo'}
          value={dataArbol.codigo ? dataArbol.codigo : dataArbol.codigo_arbol}
        />
        <SelectSimple
          label={'Tipo intervención *'}
          id="tipo_intervencion"
          placeholder={selectPlace}
          valueSelected={dataForm.tipo_intervencion}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, tipo_intervencion: items});
            }
          }}
          list={combos}
        />
      </View>
      <View style={[styles.form, {zIndex: 9}]}>
        <SelectSimple
          label={'Proyecto *'}
          id="proyecto"
          placeholder={selectPlace}
          valueSelected={dataForm.proyecto}
          onSelected={items => {
            if (items != null) {
              setDataForm({...dataForm, proyecto: items});
            }
          }}
          list={combos}
        />
        <DatePicker
          label={'Fecha intervencion *'}
          placeholder={'dd/mm/aaaa'}
          value={dataForm.fecha}
          onSelectDate={text => setDataForm({...dataForm, fecha: text})}
        />
      </View>
      <View style={styles.form}>
        <AutoComplete
          label={'Intervencion secundaria *'}
          id="intervencion_secundaria"
          placeholder={selectPlace}
          stylesNew={{width: responsiveWidth(90), paddingHorizontal: '2%'}}
          onSelected={items => {
            if (items != null) {
              let data = items.map(e => {
                return e.id;
              });
              setDataSecondarym({
                ...dataSecondary,
                intervencion_secundaria: data,
              });
            }
          }}
          list={combos}
        />
      </View>
      {zonaVerde ? (
        <View style={styles.form}>
          <TextInputForm
            label={'Área'}
            placeholder={'Área'}
            value={dataForm.area}
            keyboardType="numeric"
            onChangeTextInput={text => setDataForm({...dataForm, area: text})}
          />
          <TextInputForm
            label={'Costo'}
            placeholder={'Costo'}
            value={dataForm.costo}
            keyboardType="numeric"
            onChangeTextInput={text => setDataForm({...dataForm, costo: text})}
          />
        </View>
      ) : (
        <View style={styles.form}>
          <TextArea
            label={'Observaciones *'}
            placeholder={''}
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="name"
            value={dataForm.observacion}
            keyboardType="default"
            onChangeText={text => setDataForm({...dataForm, observacion: text})}
          />
        </View>
      )}
      <View style={[styles.form, {marginTop: 10}]}>
        <FormImagenes dataImage={dataImage} setDataImage={setDataImage} />
      </View>
      <View style={[styles.form, {justifyContent: 'flex-end'}]}>
        <Button
          compact={true}
          mode="contained"
          style={styles.guardar}
          color={theme.colors.primary}
          onPress={() => fnGuardar(dataForm, dataSecondary, dataImage)}>
          Guardar
        </Button>
      </View>
    </View>
  );
};
