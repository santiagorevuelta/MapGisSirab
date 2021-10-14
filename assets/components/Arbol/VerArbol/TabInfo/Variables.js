import {Text, View} from 'react-native';
import {theme} from '../../../../core/theme';
import React from 'react';

export default function () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.blanco,
        alignItems: 'center',
      }}>
      <Text>1</Text>
    </View>
  );
}
