import React from 'react';
import {View} from 'react-native';
import {theme} from '../../../core/theme';
import {Button as ButtonIcon} from 'react-native-paper';
import SelectSimple from '../../commons/selectSimple/SelectSimple';
import DatePicker from '../../commons/DatePicker/DatePicker';
import styles from '../../css/ingresarcss';
import TextArea from '../../commons/TextArea';
import FormImagenes from '../../commons/imagenes/FormImagenes';

const selectPlace = 'Seleccione...';

export default ({fnGuardar, combos = []}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [dataSecondary, setDataSecondarym] = React.useState({});
  const [dataImage, setDataImage] = React.useState([]);

  return (
    <View style={styles.body}>
      <View style={[styles.form, {zIndex: 10}]}>
        <SelectSimple
          label={'Tipo intervención'}
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
        <DatePicker
          label={'Fecha intervencion'}
          placeholder={'dd/mm/aaaa'}
          value={dataForm.fecha}
          onSelectDate={text => setDataForm({...dataForm, fecha: text})}
        />
      </View>
      <View style={[styles.form, {zIndex: 9}]}>
        <SelectSimple
          label={'Proyecto'}
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
        <SelectSimple
          label={'Intervencion secundaria'}
          id="intervencion_secundaria"
          placeholder={selectPlace}
          valueSelected={dataSecondary.intervencion_secundaria}
          onSelected={items => {
            if (items != null) {
              setDataSecondarym({
                ...dataSecondary,
                intervencion_secundaria: items,
              });
            }
          }}
          list={combos}
        />
      </View>
      <View style={styles.form}>
        <TextArea
          label={'Observaciones'}
          placeholder={''}
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="name"
          value={dataForm.observacion}
          keyboardType="default"
          onChangeText={text => setDataForm({...dataForm, observacion: text})}
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
          onPress={() => fnGuardar(dataForm, dataSecondary, dataImage)}>
          Guardar
        </ButtonIcon>
      </View>
    </View>
  );
};
