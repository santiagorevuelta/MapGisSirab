import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';

import FormCharacteristics from './Characteristics';
import FormVariables from './Variables';

const Tab = createMaterialTopTabNavigator();

export default function getHome({dataArbol, dataVariables}) {
  function Characteristics() {
    return dataArbol ? <FormCharacteristics data={dataArbol} /> : null;
  }

  function Variables() {
    return dataVariables ? <FormVariables data={dataVariables} /> : null;
  }

  return (
    <View style={styles.floatModal}>
      <Tab.Navigator
        screenOptions={{
          tabBarOptions: {upperCaseLabel: false},
          tabBarInactiveTintColor: {fontcolor: 'red'},
          tabBarLabelStyle: [theme.ver.Label, styles.header],
        }}>
        <Tab.Screen
          name="Caracteristicas"
          component={Characteristics}
          options={{
            title: 'Caracteristicas árbol',
          }}
        />
        <Tab.Screen
          name="Variables"
          component={Variables}
          options={{
            title: 'Variables dasométricas',
            tabBarInactiveTintColor: 'blue',
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
    position: 'absolute',
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
    top: responsiveHeight(Platform.OS === 'ios' ? 35 : 30),
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
