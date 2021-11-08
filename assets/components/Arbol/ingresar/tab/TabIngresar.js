import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';
import FormImagenes from './FormImagenes';
import FormVariables from './FormVariables';

const Tab = createMaterialTopTabNavigator();

function getHome({dataImage, setDataImage, dataVar, setDataVar}) {

  function imagenes() {
    return <FormImagenes dataImage={dataImage} setDataImage={setDataImage} />;
  }

  function variables() {
    return <FormVariables dataVar={dataVar} setDataVar={setDataVar} />;
  }

  return (
    <View style={styles.floatModal}>
      <Tab.Navigator
        theme={theme}
        screenOptions={{
          tabBarOptions: {upperCaseLabel: false},
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.headers,
          tabBarLabelStyle: [theme.ver.Label, styles.header],
        }}>
        <Tab.Screen
          name="variables"
          component={variables}
          options={{
            title: 'Variables dasométricas',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="imagenes"
          component={imagenes}
          options={{
            title: 'Fotos',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: responsiveFontSize(1.2),
  },
  floatModal: {
    backgroundColor: theme.colors.blanco,
    height: responsiveScreenHeight(30),
    alignContent: 'center',
    marginTop: '5%',
  },
});
export default getHome;
