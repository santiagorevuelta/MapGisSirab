import React, { useEffect } from "react";
import combosArbol from "../../../helpers/combosArbol";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../core/theme";
import { Button as ButtonIcon } from "react-native-paper";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import TextInputForm from "../TextInputForm";
import SelectSimple from "../../commons/selectSimple/SelectSimple";
import DatePicker from "../../commons/DatePicker/DatePicker";
import { notifyMessage } from "../../../core/general";

const selectPlace = "Seleccione...";

export default props => {
  const [dataForm, setDataForm] = React.useState({});
  const [combos, setCombos] = React.useState([]);
  const [combosBarrios, setCombosBarrios] = React.useState([]);

  useEffect(() => {
    combosArbol().then(data => {
      setCombos(data);
    });
  }, []);

  const ubicarEnMapa = () => {
    setDataForm({ ...dataForm, latitud: 445454, longitud: 545454 });
  };


  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <View style={styles.form}>
        <SelectSimple
          label={"Especie"}
          id="especie"
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, especie: items.id });
            }
          }}
          list={combos}
        />
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={"Código árbol"}
          placeholder={"Código árbol"}
          returnKeyType="next"
          value={dataForm.codigo_arbol}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={text => setDataForm({ ...dataForm, codigo_arbol: text })}
        />
        <DatePicker
          label={"Fecha de ingreso"}
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
        <SelectSimple
          label={"Comuna"}
          id="primer_nivel"
          placeholder={selectPlace}
          valueSelected={dataForm.comuna}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, primer_nivel: items.id });
            }
          }}
          list={combos}
        />
        <SelectSimple
          label={"Barrio"}
          id="segundo_nivel"
          disabledView={true}
          placeholder={selectPlace}
          onSelected={items => {
            if (items != null) {
              setDataForm({ ...dataForm, segundo_nivel: items.id });
            }
          }}
          list={combosBarrios}
        />
      </View>
      <View style={[styles.form, styles.geo]}>
        <Text style={theme.textos.LabelIn}>{"Coordenadas geográficas"}</Text>
        <View style={styles.geoButons}>
          <ButtonIcon
            compact={true}
            labelStyle={{ fontSize: responsiveFontSize(3) }}
            icon="map-marker-radius-outline"
            color={theme.colors.primary}
            onPress={() => {
              notifyMessage("Seleccionar punto en mapa");
              ubicarEnMapa();
            }}
          />
        </View>
      </View>
      <View style={styles.form}>
        <TextInputForm
          label={"latitude"}
          editable={false}
          placeholder={"latitude"}
          value={dataForm.latitud}
        />
        <TextInputForm
          label={"longitude"}
          editable={false}
          placeholder={"longitude"}
          value={dataForm.longitud}
        />
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
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flexDirection: "column",
  },
  form: {
    flexDirection: "row",
  },
  guardar: {
    borderRadius: theme.radius + 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  geo: {
    height: responsiveHeight(4),
    marginVertical: responsiveWidth(3),
    paddingHorizontal: "2%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 0,
    paddingBottom: 0,
  },
});
