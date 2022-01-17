import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../../core/theme';
import FormImagenes from '../../../commons/imagenes/FormImagenes';
import FormVariables from './FormVariables';

const Tab = createMaterialTopTabNavigator();

function TabIngresar({dataImage, setDataImage, label, dataVar, setDataVar}) {
  const setImage = data => {
    setDataImage(data);
  };

  function imagenes() {
    return (
      <FormImagenes
        dataImage={dataImage}
        setDataImage={setImage}
        label={label}
        newStyles={styles.image}
      />
    );
  }

  function variables() {
    return <FormVariables dataVar={dataVar} setDataVar={setDataVar} />;
  }

  return (
    <View style={styles.floatModal}>
      <Tab.Navigator
        theme={theme}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: responsiveFontSize(1.6),
            textTransform: 'none',
          },
          tabBarItemStyle: {height: 40}, //, width: 'auto'
          tabBarInactiveTintColor: theme.colors.headers,
          tabBarPressColor: theme.colors.border,
          tabBarActiveTintColor: theme.colors.primary,
          //tabBarLabelStyle: [theme.ver.Label, styles.header],
        }}>
        <Tab.Screen
          name="variables"
          component={variables}
          options={{
            title: 'Variables dasométricas',
            tabBarStyle: {upperCaseLabel: false},
            labelStyle: {textTransform: 'none'},
          }}
        />
        <Tab.Screen
          name="imagenes"
          component={imagenes}
          options={{
            title: 'Fotos',
            tabBarStyle: {upperCaseLabel: false},
            labelStyle: {textTransform: 'none'},
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
  image: {
    width: responsiveScreenWidth(28),
    height: responsiveScreenWidth(28),
  },
  padre: {},
  floatModal: {
    height: responsiveScreenHeight(30),
    paddingHorizontal: '2%',
    alignContent: 'center',
  },
});
export default TabIngresar;
