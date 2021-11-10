import React, { useEffect } from "react";
import combosArbol from "../../../helpers/combosArbol";
import { StyleSheet, View } from "react-native";
import { theme } from "../../../core/theme";
import { Button as ButtonIcon } from "react-native-paper";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import SelectSimple from "../../commons/selectSimple/SelectSimple";
import DatePicker from "../../commons/DatePicker/DatePicker";
import styles from '../../css/ingresarcss';
import TextArea from '../../commons/TextArea'
import FormImagenes from '../../../components/commons/imagenes/FormImagenes';

const selectPlace = "Seleccione...";

export default ({data = []}) => {
  const [dataForm, setDataForm] = React.useState({});
  const [combos] = React.useState(data);
  const [dataImage, setDataImage] = React.useState([]);
  console.log(dataForm)
  return (
    <View style={styles.body}>
      <View style={styles.form}>
      </View>
      <View style={styles.form}>
        <SelectSimple
          label={"Proyecto *"}
          id="entidad"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, id_proyecto: items.id });
            }
          }}
          list={combos}
        />
        <DatePicker
          label={"Fecha intervencion"}
          placeholder={"dd/mm/aaaa"}
          value={dataForm.fecha}
          keyboardType="default"
          onSelectDate={text => setDataForm({ ...dataForm, fecha: text })} />
      </View>
      <View style={styles.form}>
        <SelectSimple
          label={"Tipo intervencion"}
          id="tipo_intervencion"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, fecha: items.id });
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={"Intervecion secundaria"}
          id="intervencion_secundaria"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, origen_arbol: items.id });
            }
          }}
          list={combos}
        />
      </View>
        <View style={styles.form}>
        <TextArea
            label={"Observaciones"}
            placeholder={""}
            returnKeyType="next"
            autoCapitalize="none"
            textContentType="name"
            value={dataForm.descripcion}
            keyboardType="default"
            onChangeText={text => setDataForm({...dataForm, descripcion: text})}
        />
        </View>
        <View style={[styles.form,{marginTop:10}]}>
            <FormImagenes  dataImage={dataImage} setDataImage={setDataImage}/>
        </View>
      <View style={[styles.form, { justifyContent: "flex-end" }]}>
        <ButtonIcon
          compact={true}
          mode="contained"
          style={styles.guardar}
          icon="content-save"
          color={theme.colors.primary}
          onPress={() => {}}>Guardar</ButtonIcon>
      </View>
    </View>
  );
}
;