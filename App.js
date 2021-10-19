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
import {Provider as PaperProvider } from 'react-native-paper';
import {theme} from './assets/core/theme';
import {enableScreens} from 'react-native-screens';
enableScreens(true);

import {LoginScreen, Dashboard, ViewTree} from './assets/screens';
const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <PaperProvider theme={theme} >
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName={'Dashboard'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ViewTree" component={ViewTree} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
