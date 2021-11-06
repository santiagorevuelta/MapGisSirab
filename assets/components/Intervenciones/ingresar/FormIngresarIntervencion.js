import React, { useEffect } from "react";
import combosArbol from "../../../helpers/combosArbol";
import { StyleSheet, View } from "react-native";
import { theme } from "../../../core/theme";
import { Button as ButtonIcon } from "react-native-paper";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import SelectSimple from "../../commons/selectSimple/SelectSimple";
import DatePicker from "../../commons/DatePicker/DatePicker";
import styles from '../../css/ingresarcss'

const selectPlace = "Seleccione...";

export default props => {
  const [dataForm, setDataForm] = React.useState({});
  const [combos, setCombos] = React.useState([]);

  useEffect(() => {
    combosArbol().then(data => {
      setCombos(data);
    });
  }, []);

  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <View style={styles.form}>
      </View>
      <View style={styles.form}>
        <SelectSimple
          label={"Tipo intervención"}
          id="tipo_intervencion"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, tipo_intervencion: items.id });
            }
          }}
          list={combos}
        />
        <DatePicker
          label={"Fecha intervencion"}
          placeholder={"dd/mm/aaaa"}
          value={dataForm.fecha}
          keyboardType="default"
          onChangeText={text => setDataForm({ ...dataForm, fecha: text })}
          onSelectDate={text => setDataForm({ ...dataForm, fecha: text })} />
      </View>
      <View style={styles.form}>
        <SelectSimple
          label={"Tipo árbol"}
          id="tipo_arbol"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, tipo_arbol: items.id });
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={"Tipo origen árbol"}
          id="origen_arbol"
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


      </View>
      <View style={[styles.form, { justifyContent: "flex-end" }]}>
        <ButtonIcon
          compact={true}
          mode="contained"
          style={styles.guardar}
          icon="content-save"
          color={theme.colors.primary}
          onPress={() => {
          }}>Guardar</ButtonIcon>
      </View>
    </View>
  );
}
;