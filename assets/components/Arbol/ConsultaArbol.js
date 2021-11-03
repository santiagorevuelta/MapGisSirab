import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import FormConsultaArbol from "./FormConsultaArbol";
import ResultSearch from "./ResultSearch";
import { notifyMessage } from "../../core/general";
import HeaderModal from "../home/HeaderModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import buscarDatos from "../../helpers/buscarDatos";
import { limpiarMapa, verEnMapaAllPoint } from "../map/BackgroundMap";

const ModalConsult = ({ ...props }) => {
  const [buscar, setBuscar] = useState(false);
  const [dataResult, setDataResult] = useState({});
  const fnBuscar = async (obj, filtros = {}) => {
    if (obj) {
      AsyncStorage.setItem("filtros", JSON.stringify(filtros));
      let response = await buscarDatos(filtros, 1, "searchTree");
      if (response.length === 0) {
        notifyMessage("La consulta no obtuvo resultados");
        limpiarMapa();
        return;
      }
      setDataResult(response);
      verEnMapaAllPoint(response.data);
    }
    setBuscar(obj);
  };

  const fnLimpiar = (obj) => {
    setBuscar(obj);
    limpiarMapa();
  };

  const paginar = async page => {
    let res = await AsyncStorage.getItem("filtros");
    let filtros = res === null ? {} : JSON.parse(res);
    let response = await buscarDatos(filtros, page, "searchTree");
    if (response.length === 0) {
      notifyMessage("La consulta no obtuvo resultados");
      limpiarMapa();
      return;
    }
    setDataResult(response);
    verEnMapaAllPoint(response.data);
  };

  return (
    <>
      <HeaderModal
        type={props.label}
        setOption={props.setOption}
        backIndex={props.back}
      />
      <FormConsultaArbol fnBuscar={fnBuscar} fnLimpiar={fnLimpiar} />
      {buscar ? (
        <ResultSearch
          tabArbol={props.tabArbol}
          data={dataResult.data}
          meta={dataResult.meta}
          paginar={paginar}
        />
      ) : null}
    </>
  );
};

export default ModalConsult;

const styles = StyleSheet.create({
  contend: {
    flexDirection: "row",
    height: responsiveHeight(5),
    paddingLeft: responsiveWidth(5),
  },
  regress: {
    width: responsiveWidth(30),
  },
  regressTxt: {
    color: theme.colors.headers,
    fontSize: responsiveFontSize(1.5),
    fontWeight: "normal",
    fontStyle: "italic",
    position: "absolute",
    textDecorationLine: "underline",
    top: responsiveWidth(1),
    paddingLeft: responsiveWidth(5),
    elevation: 5,
  },
  regressHead: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
  },
});
