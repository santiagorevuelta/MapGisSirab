import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../css/home/ModalOptionsCss";
import { theme } from "../../core/theme";
import Animated from "react-native-reanimated";

import ConsultarArbol from "../icons/ConsultarArbol";
import IngresarArbol from "../icons/IngresarArbol";

export default props => {
  return (
    <>
      <View style={styles.header}>
        <Text style={[theme.textos.Label, styles.headerText]}>
          {"Escoja una opción"}
        </Text>
      </View>
      <Animated.View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? theme.pressed : theme.offPressed,
            },
            styles.modal,
          ]}
          onPress={() => {
            props.setOption("Consulta");
          }}>
          <ConsultarArbol />
          <Text style={[theme.textos.Label, styles.labels]}>{"Consultar"}</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? theme.pressed : theme.offPressed,
            },
            styles.modal,
          ]}
          onPress={() => {
            props.setOption("Ingresar");
          }}>
          <IngresarArbol />
          <Text style={[theme.textos.Label, styles.labels]}>{"Ingresar"}</Text>
        </Pressable>
      </Animated.View>
    </>
  );
};
