/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './assets/core/theme';
import {enableScreens} from 'react-native-screens';
enableScreens(true);

import {LoginScreen, Dashboard, EnterTree} from './assets/screens';
const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'EnterTree'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EnterTree" component={EnterTree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
