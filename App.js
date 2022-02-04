/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './src/core/theme';
import {enableScreens} from 'react-native-screens';
import {Dashboard, LoginScreen, ViewTree, ViewZone} from './src/screens';
import {configureFonts} from 'react-native-paper';
import VariablesState from './Context/variables/VariablesState';
enableScreens(true);

const Stack = createStackNavigator();
const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto',
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
    <VariablesState>
      <NavigationContainer independent={true} theme={theme} ref={createRef()}>
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
    </VariablesState>
  );
};

export default App;
