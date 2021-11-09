import React from "react";
import { StyleSheet, Text, TextInput as Input, View } from "react-native";
import { theme } from "../../core/theme";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function TextSimple({label,value = 0}) {
    return (
        <View style={styles.container}>
            <Text style={[theme.textos.LabelIn]}>{label}</Text>
            <Text style={[theme.textos.label,styles.label]}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(50),
        height: responsiveHeight(5),
        marginVertical: responsiveWidth(3),
        paddingHorizontal: "2%",
    },
    label: {
        height: "100%",
        paddingHorizontal: "2%",
        color: '#B5B2B2'
    },
});
