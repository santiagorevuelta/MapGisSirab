import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';

import Characteristics from './Characteristics';
import Variables from './Variables';

const Tab = createMaterialTopTabNavigator();

function getHome() {
  return (
    <View style={styles.floatModal}>
      <Tab.Navigator
        theme={theme}
        screenOptions={{
          tabBarOptions: {upperCaseLabel: false},
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.headers,
          tabBarLabelStyle: {fontSize: responsiveFontSize(1.2)},
        }}>
        <Tab.Screen
          name="Caracteristicas"
          component={Characteristics}
          options={{
            title: 'Caracteristicas árbol',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Variables"
          component={Variables}
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
    top: responsiveHeight(35),
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
export default getHome;
