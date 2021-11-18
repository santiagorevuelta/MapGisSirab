import Animated from 'react-native-reanimated';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../core/theme';
import {ScrollView} from 'react-native-gesture-handler';
import Pagination from '../../core/Pagination';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function ({children, props}) {
  return (
    <Animated.View style={styles.container}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView persistentScrollbar={true} horizontal>
        {children}
      </ScrollView>
      <Pagination meta={props.meta} paginar={props.paginar} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },
  txtRes: {
    paddingBottom: '5%',
    fontSize: responsiveFontSize(1.8),
  },
});
