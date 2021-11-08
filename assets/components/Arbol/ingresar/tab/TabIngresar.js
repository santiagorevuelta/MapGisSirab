import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';
import FormImagenes from './FormImagenes';
import FormVariables from './FormVariables';

const Tab = createMaterialTopTabNavigator();

function getHome(props) {
  function imagenes() {
    return <FormImagenes props />;
  }

  function variables() {
    return <FormVariables props />;
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
          name=" "
          component={variables}
          options={{
            title: 'Caracteristicas árbol',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name=" "
          component={imagenes}
          options={{
            title: 'Variables dasométricas',
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
    borderWidth: 1,
    borderColor: theme.colors.primary,
    elevation: 6,
    paddingTop: 1,
    zIndex: 3,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(30),
    marginLeft: responsiveScreenWidth(5),
    marginRight: responsiveScreenWidth(5),
    alignContent: 'center',
    borderRadius: 30,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    shadowColor: '#000',
  },
});
export default getHome;
