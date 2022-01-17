/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './assets/core/theme';
import {enableScreens} from 'react-native-screens';
import {Dashboard, LoginScreen, ViewTree, ViewZone} from './assets/screens';
import {Text} from 'react-native';
import {configureFonts} from 'react-native-paper';

enableScreens(true);

const Stack = createStackNavigator();
const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'roboto',
      fontWeight: 'normal',
    },
  },
};

theme.fonts = configureFonts(fontConfig);

const App: () => Node = () => {
  return (
    <NavigationContainer
      independent={true}
      theme={theme}
      fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ViewZone" component={ViewZone} />
        <Stack.Screen name="ViewTree" component={ViewTree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
