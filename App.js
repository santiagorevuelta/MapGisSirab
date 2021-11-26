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
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
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
        <Stack.Screen name="ViewTree" component={ViewTree} />
        <Stack.Screen name="ViewZone" component={ViewZone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
