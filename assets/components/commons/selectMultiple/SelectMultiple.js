import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { notifyMessage } from "../../../core/general";
import html_script from "./html_script";
import { theme } from "../../../core/theme";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const selectRef = React.createRef();

function SelectMultiple({ label, id, list, onSelected }) {
  const [listItems, setListItems] = useState(null);
  useEffect(() => {
    setTimeout(function() {
      if (selectRef.current) {
        let data = [];
        list.map((items) => {
          items.campo === id && data.push(items);
        });
        setListItems(data);
        //selectRef.current.injectedJavaScript(`llenarCombo(${JSON.stringify(listItems)})`);
      }

    }, 100);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[theme.textos.LabelIn]}>{label}</Text>
      <View style={styles.content}>
        <WebView
          ref={selectRef}
          onMessage={event => {
            notifyMessage(event.nativeEvent.data);
          }}
          source={{
            html: html_script,
          }}
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          injectedJavaScript={null}
          style={styles.select}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: responsiveWidth(3),
    paddingHorizontal: "2%",
    height: responsiveHeight(5),
  },
  content: {
    height: responsiveHeight(5),
  },
  select: {
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.colors.blanco,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderWidth: 0.2,
    borderTopWidth: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    zIndex: 10,
    elevation: 10,
  },
});

function clean() {
  selectRef.current.reload();
}

module.exports = { SelectMultiple, clean };
